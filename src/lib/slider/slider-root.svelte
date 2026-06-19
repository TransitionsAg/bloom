<script lang="ts" module>
  import { Slider } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex w-full touch-none select-none items-center text-foreground before:absolute before:rounded-full before:bg-secondary data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 data-[orientation=horizontal]:h-8 data-[orientation=horizontal]:before:left-0 data-[orientation=horizontal]:before:top-1/2 data-[orientation=horizontal]:before:h-2 data-[orientation=horizontal]:before:w-full data-[orientation=horizontal]:before:-translate-y-1/2 data-[orientation=vertical]:h-64 data-[orientation=vertical]:w-8 data-[orientation=vertical]:flex-col data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:top-0 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-2 data-[orientation=vertical]:before:-translate-x-1/2",
  })

  export type Props = ComponentProps<typeof Slider.Root>
</script>

<script lang="ts">
  let { value = $bindable(), ref = $bindable(null), class: className, ...restProps }: Props = $props()
</script>

<Slider.Root bind:value={value as never} bind:ref {...restProps} class={variants({ class: className })} />
