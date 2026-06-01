<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-9 rounded border-2 border-field bg-background px-2 text-sm font-semibold text-foreground transition-colors focus-visible:border-primary focus-visible:outline-none disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.YearSelect>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.YearSelect {...restProps} class={variants({ class: className })} />
