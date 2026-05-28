<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-10 rounded-md border-2 border-border bg-background px-3 text-sm font-medium text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50",
  })

  export type Props = ComponentProps<typeof RangeCalendar.MonthSelect>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.MonthSelect {...restProps} class={variants({ class: className })} />
