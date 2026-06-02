<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative size-10 p-0 text-center text-sm font-medium focus-within:z-10",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Cell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Cell {...restProps} class={variants({ class: className })} />
