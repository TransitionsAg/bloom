<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "rounded-lg bg-background p-4 text-foreground data-[disabled]:text-disabled-foreground data-[invalid]:border-destructive",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Calendar>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Calendar {...restProps} class={variants({ class: className })} />
