<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full items-center justify-between",
  })

  export type Props = ComponentProps<typeof DateRangePicker.GridRow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.GridRow {...restProps} class={variants({ class: className })} />
