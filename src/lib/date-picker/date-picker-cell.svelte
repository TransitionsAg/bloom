<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative size-9 p-0 text-center text-sm font-medium",
  })

  export type Props = ComponentProps<typeof DatePicker.Cell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Cell {...restProps} class={variants({ class: className })} />
