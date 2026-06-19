<script lang="ts" module>
  import { Editor } from "@tiptap/core"
  import { BubbleMenu } from "@tiptap/extension-bubble-menu"
  import { Placeholder } from "@tiptap/extensions"
  import StarterKit from "@tiptap/starter-kit"
  import { cva } from "cva"
  import { untrack } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  import BubbleMenuToolbar from "./bubble-menu.svelte"

  export const variants = cva({
    // Heading sizes/weights mirror Bloom's typo-h* scale; set as utilities so
    // they win over Tailwind's preflight reset inside the contenteditable.
    base: "flex min-h-24 w-full min-w-0 flex-col rounded border-2 border-border bg-field px-4 py-3 text-[15px] font-medium text-foreground transition-all hover:bg-field-accent focus-within:border-primary focus-within:bg-field focus-within:outline-none aria-invalid:border-destructive aria-invalid:focus-within:border-destructive data-disabled:cursor-not-allowed data-disabled:border-disabled data-disabled:bg-disabled data-disabled:text-disabled-foreground data-disabled:hover:bg-disabled [&_.tiptap>*+*]:mt-2 [&_.tiptap_h1]:text-4xl [&_.tiptap_h1]:font-extrabold [&_.tiptap_h2]:text-3xl [&_.tiptap_h2]:font-extrabold [&_.tiptap_h3]:text-2xl [&_.tiptap_h3]:font-extrabold [&_.tiptap_h4]:text-xl [&_.tiptap_h4]:font-extrabold",
  })

  export type Props = {
    /** The editor content as an HTML string. Bindable. */
    value?: string
    /** Placeholder shown while the editor is empty. */
    placeholder?: string
    /** Whether the content can be edited. */
    editable?: boolean
  } & Omit<HTMLAttributes<HTMLDivElement>, "contenteditable">
</script>

<script lang="ts">
  let {
    value = $bindable(""),
    placeholder = "Write something…",
    editable = true,
    class: className,
    ...restProps
  }: Props = $props()

  let element = $state<HTMLDivElement>()
  let menuElement = $state<HTMLDivElement>()
  let editor = $state<Editor>()

  $effect(() => {
    if (!element || !menuElement) return

    // Read the initial config untracked so editing (which updates `value`)
    // never recreates the editor — the sync effects below handle updates.
    const instance = untrack(
      () =>
        new Editor({
          element,
          editable,
          content: value,
          extensions: [
            StarterKit.configure({
              // Default body weight is medium, so bold needs to be noticeably heavier.
              bold: { HTMLAttributes: { class: "font-extrabold" } },
              bulletList: { HTMLAttributes: { class: "list-disc pl-5" } },
              orderedList: { HTMLAttributes: { class: "list-decimal pl-5" } },
              blockquote: {
                HTMLAttributes: { class: "border-l-2 border-border pl-3 text-muted-foreground" },
              },
              code: { HTMLAttributes: { class: "rounded bg-muted px-1 py-0.5 font-mono text-[0.9em]" } },
              codeBlock: { HTMLAttributes: { class: "rounded bg-muted p-3 font-mono text-sm" } },
              link: { HTMLAttributes: { class: "text-primary underline underline-offset-2" } },
            }),
            Placeholder.configure({ placeholder }),
            BubbleMenu.configure({ element: menuElement }),
          ],
          editorProps: {
            attributes: { class: "tiptap min-h-full flex-1 outline-none" },
          },
          onUpdate: ({ editor }) => {
            value = editor.getHTML()
          },
        }),
    )

    editor = instance
    return () => {
      instance.destroy()
      editor = undefined
    }
  })

  // Keep the editor in sync when `value` is changed from the outside.
  $effect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false })
    }
  })

  $effect(() => {
    editor?.setEditable(editable)
  })
</script>

<div
  bind:this={element}
  data-bloom-rich-text-input
  data-disabled={editable ? undefined : ""}
  {...restProps}
  class={variants({ class: className })}
></div>

<BubbleMenuToolbar bind:element={menuElement} {editor} />

<style>
  /* Placeholder text shown by the Tiptap Placeholder extension.
     Scoped to this component so the rule doesn't leak to other .tiptap editors. */
  :global([data-bloom-rich-text-input] .tiptap p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
    color: var(--color-muted-foreground);
  }
</style>
