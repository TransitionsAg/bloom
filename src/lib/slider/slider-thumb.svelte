<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-20 block size-6 cursor-pointer rounded-full border-2 border-border bg-background text-foreground shadow-lg transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled disabled:opacity-50 data-active:scale-[0.96] data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:border-disabled-border data-[disabled]:bg-disabled data-[disabled]:opacity-50",
  })

  export type Props = ComponentProps<typeof Slider.Thumb>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Slider.Thumb {...restProps} class={variants({ class: className })} />
