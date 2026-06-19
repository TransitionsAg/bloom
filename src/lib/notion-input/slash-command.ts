import { type Editor, Extension, type Range } from "@tiptap/core"
import Suggestion, { type SuggestionOptions } from "@tiptap/suggestion"
import {
  Code,
  ListBullets,
  ListNumbers,
  Minus,
  Quotes,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextT,
} from "phosphor-svelte"
import type { Component } from "svelte"

export type SlashItem = {
  title: string
  description: string
  icon: Component
  keywords: string[]
  command: (props: { editor: Editor; range: Range }) => void
}

/** The block types offered by the `/` menu. */
export const slashItems: SlashItem[] = [
  {
    title: "Text",
    description: "Plain paragraph",
    icon: TextT,
    keywords: ["paragraph", "text", "plain", "body"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setParagraph().run(),
  },
  {
    title: "Heading 1",
    description: "Large section heading",
    icon: TextHOne,
    keywords: ["title", "big", "h1"],
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run(),
  },
  {
    title: "Heading 2",
    description: "Medium section heading",
    icon: TextHTwo,
    keywords: ["subtitle", "h2"],
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run(),
  },
  {
    title: "Heading 3",
    description: "Small section heading",
    icon: TextHThree,
    keywords: ["h3"],
    command: ({ editor, range }) =>
      editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run(),
  },
  {
    title: "Bullet List",
    description: "Unordered list",
    icon: ListBullets,
    keywords: ["unordered", "ul", "bullet", "point"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBulletList().run(),
  },
  {
    title: "Numbered List",
    description: "Ordered list",
    icon: ListNumbers,
    keywords: ["ordered", "ol", "number"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
  },
  {
    title: "Quote",
    description: "Capture a quote",
    icon: Quotes,
    keywords: ["blockquote", "citation"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
  },
  {
    title: "Code",
    description: "Code block",
    icon: Code,
    keywords: ["snippet", "pre", "monospace"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
  },
  {
    title: "Divider",
    description: "Horizontal rule",
    icon: Minus,
    keywords: ["hr", "rule", "separator", "line"],
    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
  },
]

/** Filters the slash items by the typed query, matching title or keywords. */
export function filterSlashItems(query: string): SlashItem[] {
  const q = query.toLowerCase().trim()
  if (!q) return slashItems
  return slashItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) || item.keywords.some((keyword) => keyword.includes(q)),
  )
}

/**
 * A `/` slash command extension. The visual menu is supplied by the consumer
 * through `suggestion.render` (see `notion-input-root.svelte`).
 */
export const SlashCommand = Extension.create({
  name: "slashCommand",

  addOptions() {
    return {
      suggestion: {} as Partial<SuggestionOptions<SlashItem, SlashItem>>,
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion<SlashItem, SlashItem>({
        editor: this.editor,
        char: "/",
        startOfLine: false,
        items: ({ query }) => filterSlashItems(query),
        command: ({ editor, range, props }) => props.command({ editor, range }),
        ...this.options.suggestion,
      }),
    ]
  },
})
