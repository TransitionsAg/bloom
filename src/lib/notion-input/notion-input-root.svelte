<script lang="ts" module>
  import { Editor } from "@tiptap/core"
  import { BubbleMenu } from "@tiptap/extension-bubble-menu"
  import { Placeholder } from "@tiptap/extensions"
  import StarterKit from "@tiptap/starter-kit"
  import type { SuggestionProps } from "@tiptap/suggestion"
  import { cva } from "cva"
  import { Plus } from "phosphor-svelte"
  import { mount, unmount, untrack } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  import BubbleMenuToolbar from "../rich-text-input/bubble-menu.svelte"
  import { type SlashItem, SlashCommand } from "./slash-command.ts"
  import SlashMenu from "./slash-menu.svelte"

  export const variants = cva({
    // Heading sizes/weights mirror Bloom's typo-h* scale; set as utilities so
    // they win over Tailwind's preflight reset inside the contenteditable.
    base: "w-full min-w-0 bg-transparent py-1 pl-8 text-foreground [&_.tiptap]:outline-none [&_.tiptap_p]:typo-p [&_.tiptap_h1]:text-4xl [&_.tiptap_h1]:font-extrabold [&_.tiptap_h2]:text-3xl [&_.tiptap_h2]:font-extrabold [&_.tiptap_h3]:text-2xl [&_.tiptap_h3]:font-extrabold [&_.tiptap_strong]:font-extrabold data-disabled:cursor-not-allowed data-disabled:text-disabled-foreground",
  })

  const addButton = cva({
    base: "absolute left-0 inline-flex size-7 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted-accent hover:text-foreground",
  })

  type SlashMenuExports = {
    update: (items: SlashItem[]) => void
    onKeyDown: (event: KeyboardEvent) => boolean
  }

  export type Props = {
    /** The editor content as an HTML string. Bindable. */
    value?: string
    /** Placeholder shown on the current empty block. */
    placeholder?: string
    /** Whether the content can be edited. */
    editable?: boolean
  } & Omit<HTMLAttributes<HTMLDivElement>, "contenteditable">
</script>

<script lang="ts">
  let {
    value = $bindable(""),
    placeholder = "Type '/' for commands…",
    editable = true,
    class: className,
    ...restProps
  }: Props = $props()

  let wrapper = $state<HTMLDivElement>()
  let element = $state<HTMLDivElement>()
  let menuElement = $state<HTMLDivElement>()
  let editor = $state<Editor>()

  let hoveredBlock: HTMLElement | undefined
  let gutterTop = $state(0)
  let gutterVisible = $state(false)

  // Renders the `/` command popup by mounting the SlashMenu component into a
  // detached element that the suggestion plugin positions next to the cursor.
  function renderSlashMenu() {
    let target: HTMLDivElement
    let menu: SlashMenuExports | undefined
    let destroyPosition: (() => void) | undefined
    let runCommand: (item: SlashItem) => void = () => {}

    return {
      onStart: (props: SuggestionProps<SlashItem, SlashItem>) => {
        runCommand = props.command
        target = document.createElement("div")
        menu = mount(SlashMenu, {
          target,
          props: { command: (item: SlashItem) => runCommand(item) },
        }) as unknown as SlashMenuExports
        menu.update(props.items)
        destroyPosition = props.mount(target)
      },
      onUpdate: (props: SuggestionProps<SlashItem, SlashItem>) => {
        runCommand = props.command
        menu?.update(props.items)
      },
      onKeyDown: (props: { event: KeyboardEvent }) => {
        if (props.event.key === "Escape") return false
        return menu?.onKeyDown(props.event) ?? false
      },
      onExit: () => {
        destroyPosition?.()
        if (menu) unmount(menu)
        target?.remove()
      },
    }
  }

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
            SlashCommand.configure({ suggestion: { render: renderSlashMenu } }),
            BubbleMenu.configure({ element: menuElement }),
          ],
          editorProps: {
            attributes: { class: "tiptap outline-none" },
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

  // Height of the add button (size-7 = 1.75rem) used to center it on the line.
  const ADD_BUTTON_SIZE = 28

  function handleMouseMove(event: MouseEvent) {
    if (!editable) return
    const tiptap = element?.querySelector(".tiptap")
    if (!tiptap || !wrapper) return
    const wrapperRect = wrapper.getBoundingClientRect()
    for (const child of Array.from(tiptap.children)) {
      const rect = child.getBoundingClientRect()
      if (event.clientY >= rect.top && event.clientY <= rect.bottom) {
        // The add handle is only offered on empty ("new") lines.
        const isEmpty = (child.textContent ?? "").trim().length === 0
        hoveredBlock = isEmpty ? (child as HTMLElement) : undefined
        gutterTop = rect.top - wrapperRect.top + (rect.height - ADD_BUTTON_SIZE) / 2
        gutterVisible = isEmpty
        return
      }
    }
    gutterVisible = false
  }

  // Open the `/` menu on the hovered empty line.
  function addBlock() {
    if (!editor || !hoveredBlock) return
    const pos = editor.view.posAtDOM(hoveredBlock, 0)
    if (pos < 0) return
    editor.chain().focus().setTextSelection(pos).insertContent("/").run()
  }
</script>

<!-- Hover tracking lives on the wrapper so moving onto the "+" handle (a sibling
     of the editor) does not hide it before it can be clicked. -->
<div
  bind:this={wrapper}
  role="presentation"
  class="relative"
  onmousemove={handleMouseMove}
  onmouseleave={() => (gutterVisible = false)}
>
  {#if gutterVisible && editable}
    <button
      type="button"
      aria-label="Add block"
      class={addButton()}
      style="top: {gutterTop}px"
      onmousedown={(event) => event.preventDefault()}
      onclick={addBlock}
    >
      <Plus class="size-4" weight="bold" />
    </button>
  {/if}

  <div
    bind:this={element}
    data-bloom-notion-input
    data-disabled={editable ? undefined : ""}
    {...restProps}
    class={variants({ class: className })}
  ></div>
</div>

<BubbleMenuToolbar bind:element={menuElement} {editor} />

<style>
  /* Each top-level block is a hoverable zone so blocks read clearly.
     Scoped to this component so the rules don't leak to other .tiptap editors. */
  :global([data-bloom-notion-input] .tiptap > *) {
    border-radius: 0.5rem;
    padding: 0.375rem 0.625rem;
    transition: background-color 0.15s ease;
  }
  :global([data-bloom-notion-input] .tiptap > * + *) {
    margin-top: 0.125rem;
  }
  :global([data-bloom-notion-input] .tiptap > *:hover) {
    background-color: var(--color-secondary);
  }

  /* Placeholder text shown by the Tiptap Placeholder extension. */
  :global([data-bloom-notion-input] .tiptap .is-empty::before),
  :global([data-bloom-notion-input] .tiptap .is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
    color: var(--color-muted-foreground);
  }
</style>
