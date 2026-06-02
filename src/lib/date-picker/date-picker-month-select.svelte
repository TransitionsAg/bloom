<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-9 rounded border-2 border-field bg-background px-2 typo-sm text-foreground transition-colors focus-visible:border-primary focus-visible:outline-none disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.MonthSelect>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.MonthSelect {...restProps} class={variants({ class: className })} />
