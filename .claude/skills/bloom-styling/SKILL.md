---
name: bloom-styling
description: Use when styling Bloom components — writing or refactoring cva classes, Tailwind utilities, border/ring patterns, phosphor icons, date/time segment states, menu item layouts, or story cross-references between Bloom components.
---

# Bloom Component Styling Guidelines

Use this skill when styling Bloom Svelte components. Bloom wraps bits-ui primitives with `cva` class variance, Tailwind v4 utilities, and a local design token palette.

## Design Tokens

Defined in `src/lib/theme/theme.css`. All CSS variables under `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-background` | `#fbfbfe` | Page background |
| `--color-foreground` | `#222222` | Text |
| `--color-primary` | `#74b24c` | Accent, focus rings |
| `--color-primary-accent` | `#5d8f3d` | Hover variant |
| `--color-primary-foreground` | `--color-background` | Text on primary |
| `--color-secondary` | `#f7f7f7` | Subtle backgrounds |
| `--color-muted` | `#f7f7f7` | Muted backgrounds |
| `--color-muted-foreground` | `#737373` | Caption text |
| `--color-border` | `#ececfd` | Borders, separators |
| `--color-separator` | `#ececfd` | Separator lines |
| `--color-field` | `--color-secondary` | Form field background |
| `--color-field-accent` | `--color-secondary-accent` | Field hover |
| `--color-field-foreground` | `--color-secondary-foreground` | Field text |
| `--color-surface` | `#fbfbfe` | Card/popup surfaces |
| `--color-destructive` | `#a91101` | Error/danger |
| `--color-focus` | `#74b24c` | Focus outline color |

## Typography

Always use `typo-*` component classes for typography scale and weight instead of composing raw Tailwind text/font utilities.

Examples:
```
typo-sm text-foreground              // correct
text-sm font-semibold text-foreground // wrong

typo-xs uppercase tracking-wide text-muted-foreground // correct
text-xs font-semibold uppercase tracking-wide text-muted-foreground // wrong

typo-caption                         // correct for caption text
text-sm text-caption                 // wrong
```

Rules:
- Use `typo-h1`, `typo-h2`, `typo-h3`, `typo-h4`, `typo-p`, `typo-sm`, `typo-xs`, `typo-tiny`, or `typo-caption` wherever they match the intended type style.
- Keep color, alignment, leading, tracking, tabular number, and state utilities separate from the `typo-*` class.
- Do not write raw `text-* font-*` combinations when an existing `typo-*` class expresses the same type style.
- Typography must always use at least `font-medium`; never leave a raw `text-*` size utility at browser/default weight.
- If a component needs a recurring type style with no matching `typo-*` class, add or request a new `typo-*` token instead of inlining the raw text/font utilities repeatedly.

## Border & Ring Patterns

### Outer borders: always `border-2`
Never use bare `border` (1px). Always specify width:
```
border-2 border-border        // correct
border border-border          // wrong — 1px
border-2 border-transparent   // correct for hover-sizing patterns
```

### Inner containment: `inset-ring-2 inset-ring-border`
Use for card containers that should feel contained rather than framed:
```
inset-ring-2 inset-ring-border bg-surface
```
Applies to: popover-content, tooltip-content, dialog-content, alert-dialog-content, select-content, combobox-content, command-root, tabs-list, tabs-content.

### Outer borders (border-2): exceptions
These keep `border-2 border-border` instead of inset-ring:
- **Scroll area root** — user expects a visible outer frame
- **Input fields** (select-trigger, combobox-input, date/time field inputs, pin-input) — interactive fields use outer borders
- **Menu content** (dropdown-menu, context-menu, menubar) — popup menus with shadow
- **Small controls** (checkbox, radio-group-item, switch-root, switch-thumb) — interactive buttons
- **Avatar root** — circular frame

## Menu Components

### Content (dropdown/context/menubar)
```
// No padding on content, items handle their own spacing
base: "z-50 overflow-hidden rounded-lg border-2 border-border bg-surface text-foreground outline-none"
```

### Items (Item, CheckboxItem, RadioItem, SubTrigger)
```
// No rounded corners — hover fills full width edge-to-edge
base: "relative flex min-h-9 w-full select-none items-center gap-2 px-4 py-2 text-sm font-medium ..."
```
Key rules:
- `w-full` — item spans full content width
- No `rounded` — highlighted background touches container edges
- `px-4` — consistent horizontal padding

### Group headings
```
// Same horizontal padding as items
base: "px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
```

### Separators
```
// 2px height (h-0.5), no margin — adjacent items connect directly
base: "h-0.5 bg-border"
```
No `my-*` or `-mx-*` margins.

## Date/Time Segment Styling

### On the Input wrapper (parent)
All segment state styles live on the input via `[&_[data-segment]]:*` selectors:
```
[&_[data-segment]]:cursor-text
[&_[data-segment]]:rounded
[&_[data-segment]]:px-0.5
[&_[data-segment]]:transition-colors
[&_[data-segment]]:hover:bg-background
[&_[data-segment]]:focus:outline-none
[&_[data-segment]]:focus:bg-surface
[&_[data-segment]]:focus:text-foreground
[&_[data-segment]]:focus:ring-2
[&_[data-segment]]:focus:ring-primary
```

States:
- **Default**: transparent, shows through to `bg-field`
- **Hover**: `bg-background` (slightly brighter than field)
- **Focus**: `bg-surface` + `ring-2 ring-primary` + `outline-none` (suppress browser blue outline)

### On the Segment wrapper (child)
Only layout, sizing, and literal/disabled styles. NO state styles (no hover, no focus, no ring, no outline):
```
base: "inline-flex min-w-[2ch] rounded px-1 py-1 text-center tabular-nums text-foreground transition-colors
  aria-[valuetext=Empty]:text-caption
  data-[disabled]:text-disabled-foreground
  data-[invalid]:text-destructive
  data-[readonly]:text-caption
  data-[segment=literal]:min-w-0 data-[segment=literal]:px-0.5 data-[segment=literal]:text-caption"
```

## Input Field Consistency

All date/time/picker inputs must match:
```
flex min-h-12 w-full select-none items-center rounded-lg
border-2 border-border bg-field px-3 py-2
text-sm text-field-foreground
transition-all hover:bg-field-accent
focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus
data-[disabled]:border-disabled-border data-[disabled]:bg-disabled data-[disabled]:text-disabled-foreground
data-[invalid]:border-destructive
```

## Phosphor Icons

Always use `weight="bold"`:
```svelte
import { CaretLeft, CaretRight, Check, Star } from "phosphor-svelte"
```
```svelte
<CaretLeft class="size-4" weight="bold" />
<Check class="ml-auto size-4 text-primary" weight="bold" />
```

Available weights: `"thin"`, `"light"`, `"regular"`, `"bold"`, `"fill"`, `"duotone"`.

## Arrows (Popover/Tooltip)

bits-ui `<Arrow>` renders `<span><svg data-arrow=""><polygon fill="currentColor"></polygon></svg></span>`. The `<svg>` has `data-arrow=""`.

### Arrow wrapper pattern

```svelte
<script lang="ts" module>
  import { Popover } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-surface",
  })

  export type Props = ComponentProps<typeof Popover.Arrow>
</script>

<script lang="ts">
  const { class: className, width = 16, height = 6, ...restProps }: Props = $props()
</script>

<Popover.Arrow {...restProps} {width} {height} class={variants({ class: className })} />

<style>
  :global([data-arrow] polygon) {
    stroke: var(--color-border);
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }
</style>
```

### Why this pattern

1. **`text-surface`** — sets `color: var(--color-surface)` which `currentColor` inherits for white fill
2. **`:global([data-arrow] polygon)` `<style>` block** — `stroke`/`stroke-width` do NOT inherit from parent elements, so they must be applied directly to the polygon. Tailwind variants like `[&_polygon]:stroke-2` are unreliable on SVG children; a global `<style>` block targeting `data-arrow` reliably reaches the polygon
3. **Default size 16×6** — larger than bits-ui's 10×5 default, making the diamond visible
4. **`vector-effect: non-scaling-stroke`** — keeps stroke at exactly 2px regardless of SVG scaling

### Content pairing

The paired Content must have **outer border** (not inset ring) and **`overflow-visible`** so the arrow can extend beyond content bounds:

```
base: "overflow-visible rounded-lg border-2 border-border bg-surface ..."
```

This creates a continuous shape: the outer border wraps around the content, the arrow's white fill covers the border at the attachment point, and the polygon's stroke traces the arrow outline connecting back to the content border.

## Variants Pattern (cva)

```svelte
<script lang="ts" module>
  import { ComponentName } from "bits-ui"
  import { cva, type VariantProps } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "...",
    variants: {
      variant: {
        default: "bg-surface inset-ring-2 inset-ring-border",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: { variant: "default" },
  })

  export type Props = ComponentProps<typeof ComponentName.Root> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const { variant, class: className, ...restProps }: Props = $props()
</script>

<ComponentName.Root {...restProps} data-variant={variant ?? "default"} class={variants({ variant, class: className })} />
```

## Transparent Variant

For accordion/collapsible transparent mode:
- Root: `bg-transparent` — no background, no border, no ring
- Separator: visible via `border-b border-border` on items or `border-t` on content
- Trigger: keep hover state visible

## Seamless Grouped Items

Pattern for lists of selectable items inside a bordered container (pagination pages, tabs, toggle groups, segmented controls). The container frames the group; items are flush fill-zones with no visible dividers.

### Container

Owns the background, border, and rounded corners. Items sit directly against container edges — no `p-*` or `gap-*`:
```
base: "inline-flex items-center rounded-lg inset-ring-2 inset-ring-border bg-surface"
```

### Items

Transparent, borderless, not rounded — edge-to-edge, zero gaps. Hover gets a visible background distinguishable from the container:
```
base: "inline-flex ... cursor-pointer ... transition-all
  hover:bg-muted-accent
  data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary-accent"
```
Key rules:
- No default `bg-*` — transparent so the container background shows through
- No `rounded` — flush against siblings so hover/selected zones connect seamlessly
- No `border` or `inset-ring` — container provides the outer border
- Hover background must contrast with the container (e.g. `hover:bg-muted-accent` over `bg-secondary`)

### Edge items

Use a `<style>` block with `border-radius: inherit` so edges always match the container's rounding — no hardcoded pixel values that drift out of sync.

When the container is a **plain element** (directly in the template), scope the parent with Svelte's `div`:
```svelte
<div ...>
  {@render children?.()}
</div>

<style>
  div > :global(:first-child) {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  div > :global(:last-child) {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
</style>
```

When the container is a **bits-ui component** (renders its own element), use a `data-bloom-*` attribute on the component and target it with `:global()`:
```svelte
<Component.List data-bloom-foo-list {...restProps} ... />

<style>
  :global([data-bloom-foo-list]) > :global(:first-child) {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  :global([data-bloom-foo-list]) > :global(:last-child) {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
</style>
```

For **vertical orientation**, override to round top/bottom edges instead:
```css
:global([data-bloom-foo-list][data-orientation="vertical"]) > :global(:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-left-radius: 0;
}
:global([data-bloom-foo-list][data-orientation="vertical"]) > :global(:last-child) {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border-top-right-radius: 0;
}
```

## Slider

Thumb must NOT use `transition-all` — causes positional lag. Use `transition-colors` instead:
```
// Keep data-active scale for press feedback
base: "... transition-colors data-active:scale-[0.96] ..."
```

## Toolbar

- Root: no padding
- Selected items: no border/ring visible

## Calendar / Range Calendar

- Root: `inset-ring-2 inset-ring-border`
- Sub-elements (month-select, year-select, next-button, prev-button): `border-2 border-border`
- Days: `border-2 border-transparent` (base), `border-2 border-border` (hover)
- Range days: zero gap between highlighted dates via `gap-0` grid + `w-full` highlighted days

## Rating Group

- Stars: phosphor `Star` with `weight="bold"` default, `weight="fill"` active
- Color: `text-border` default, `text-yellow-400` active/hover/partial

## Story Cross-Referencing

Stories should use other Bloom components where appropriate:
- Use `<Button.Root>` instead of raw `<button>` elements
- Use `<Select>` inside dialogs, etc.
- Import from `"../index.ts"`

## Group Wrapping

bits-ui `GroupHeading` must be inside a `Group`:
```svelte
<ContextMenu.Group>
  <ContextMenu.GroupHeading>Layout</ContextMenu.GroupHeading>
  <ContextMenu.RadioGroup>
    ...
  </ContextMenu.RadioGroup>
</ContextMenu.Group>
```

## Non-Visual Primitives

Do NOT add `cva`/class to `Portal`, `Root`, `Sub` wrappers — they're structural primitives with no visual output.
