<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "mb-4 flex items-center justify-between gap-3",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Header>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Header {...restProps} class={variants({ class: className })} />
