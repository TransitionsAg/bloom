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
