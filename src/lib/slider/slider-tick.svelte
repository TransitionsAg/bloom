<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-20 rounded-full bg-background inset-ring-2 inset-ring-border data-[orientation=horizontal]:size-2 data-[orientation=vertical]:size-2",
  })

  export type Props = ComponentProps<typeof Slider.Tick>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Slider.Tick {...restProps} class={variants({ class: className })} />
