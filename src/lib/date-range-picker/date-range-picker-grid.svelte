<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "w-full min-w-[17.5rem] table-fixed border-collapse select-none space-y-1",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Grid>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Grid {...restProps} class={variants({ class: className })} />
