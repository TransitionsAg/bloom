<script lang="ts" module>
  import { Popover } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 max-h-[var(--bits-popover-content-available-height)] min-w-72 max-w-[calc(100vw-2rem)] overflow-visible rounded-lg border-2 border-border bg-surface p-4 text-foreground shadow-lg outline-none origin-[var(--bits-popover-content-transform-origin)]",
  })

  export type Props = ComponentProps<typeof Popover.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Popover.Content {...restProps} class={variants({ class: className })} />
