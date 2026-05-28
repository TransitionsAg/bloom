<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fill-background stroke-border",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Arrow {...restProps} class={variants({ class: className })} />
