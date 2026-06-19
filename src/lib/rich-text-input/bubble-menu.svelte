<script lang="ts" module>
  import type { Editor } from "@tiptap/core"
  import { cva } from "cva"
  import {
    Code,
    ListBullets,
    ListNumbers,
    Quotes,
    TextB,
    TextHOne,
    TextHTwo,
    TextItalic,
    TextStrikethrough,
  } from "phosphor-svelte"

  const menu = cva({
    base: "isolate z-50 flex items-center gap-0.5 rounded-lg border-2 border-border bg-surface p-1 text-foreground shadow-lg outline-none",
  })

  const menuButton = cva({
    base: "inline-flex size-8 cursor-pointer items-center justify-center rounded text-foreground transition-colors hover:bg-muted-accent data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary-accent",
  })

  export type Props = {
    /** The editor the toolbar acts on. */
    editor: Editor | undefined
    /** The root element, bound so the BubbleMenu plugin can position it. */
    element?: HTMLDivElement
  }
</script>

<script lang="ts">
  let { editor, element = $bindable() }: Props = $props()

  // Bumped on every transaction so the active states stay reactive.
  let selectionTick = $state(0)

  $effect(() => {
    if (!editor) return
    const bump = () => selectionTick++
    editor.on("transaction", bump)
    return () => {
      editor.off("transaction", bump)
    }
  })

  function isActive(name: string, attrs?: Record<string, unknown>) {
    void selectionTick
    return editor?.isActive(name, attrs) ?? false
  }
</script>

<!-- The BubbleMenu plugin positions this element and toggles its visibility. -->
<div bind:this={element} class={menu()} style="visibility:hidden">
  <button
    type="button"
    aria-label="Bold"
    data-active={isActive("bold") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleBold().run()}
  >
    <TextB class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Italic"
    data-active={isActive("italic") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleItalic().run()}
  >
    <TextItalic class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Strikethrough"
    data-active={isActive("strike") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleStrike().run()}
  >
    <TextStrikethrough class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Inline code"
    data-active={isActive("code") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleCode().run()}
  >
    <Code class="size-4" weight="bold" />
  </button>
  <div class="mx-0.5 h-5 w-px bg-border"></div>
  <button
    type="button"
    aria-label="Heading 1"
    data-active={isActive("heading", { level: 1 }) ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
  >
    <TextHOne class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Heading 2"
    data-active={isActive("heading", { level: 2 }) ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
  >
    <TextHTwo class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Bullet list"
    data-active={isActive("bulletList") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleBulletList().run()}
  >
    <ListBullets class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Ordered list"
    data-active={isActive("orderedList") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleOrderedList().run()}
  >
    <ListNumbers class="size-4" weight="bold" />
  </button>
  <button
    type="button"
    aria-label="Quote"
    data-active={isActive("blockquote") ? "" : undefined}
    class={menuButton()}
    onclick={() => editor?.chain().focus().toggleBlockquote().run()}
  >
    <Quotes class="size-4" weight="bold" />
  </button>
</div>
