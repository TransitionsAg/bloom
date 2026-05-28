<script lang="ts" module>
  import { Tooltip } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

export const variants = cva({
    base: "fill-surface stroke-border stroke-2",
  })

  export type Props = ComponentProps<typeof Tooltip.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tooltip.Arrow {...restProps} class={variants({ class: className })} />
