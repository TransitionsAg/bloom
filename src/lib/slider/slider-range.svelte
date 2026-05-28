<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "absolute z-10 rounded-full bg-primary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
  })

  export type Props = ComponentProps<typeof Slider.Range>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Slider.Range {...restProps} class={variants({ class: className })} />
