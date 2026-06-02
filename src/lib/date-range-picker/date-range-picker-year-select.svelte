<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "rounded border-2 border-border bg-background px-3 py-2 typo-sm text-foreground transition-colors focus-visible:border-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  })

  export type Props = ComponentProps<typeof DateRangePicker.YearSelect>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.YearSelect {...restProps} class={variants({ class: className })} />
