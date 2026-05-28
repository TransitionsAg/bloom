<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "select-none text-sm font-semibold text-foreground data-[disabled]:text-disabled-foreground data-[invalid]:text-destructive",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Label>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Label {...restProps} class={variants({ class: className })} />
