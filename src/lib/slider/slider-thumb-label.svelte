<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-30 rounded bg-primary px-2 py-1 text-xs font-semibold tabular-nums text-primary-foreground",
  })

  export type Props = ComponentProps<typeof Slider.ThumbLabel>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Slider.ThumbLabel {...restProps} class={variants({ class: className })} />
