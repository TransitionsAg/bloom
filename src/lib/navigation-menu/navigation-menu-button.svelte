<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLButtonAttributes } from "svelte/elements"

  export const variants = cva({
    base: "group inline-flex h-10 w-max cursor-pointer select-none items-center justify-center gap-2 rounded px-4 typo-sm text-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  })

  export type Props = HTMLButtonAttributes
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<button type="button" {...restProps} class={variants({ class: className })}>
  {@render children?.()}
</button>
