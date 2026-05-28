<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-xs font-medium tabular-nums text-muted-foreground data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Slider.TickLabel>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Slider.TickLabel {...restProps} class={variants({ class: className })} />
