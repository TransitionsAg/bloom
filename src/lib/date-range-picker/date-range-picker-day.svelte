<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative inline-flex size-10 items-center justify-center rounded border border-transparent bg-transparent text-sm text-foreground transition-colors hover:border-border hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[outside-month]:pointer-events-none data-[outside-month]:text-muted-foreground data-[unavailable]:text-muted-foreground data-[unavailable]:line-through data-[highlighted]:rounded-none data-[highlighted]:bg-secondary data-[selected]:rounded-none data-[selected]:bg-secondary data-[selection-start]:rounded-l data-[selection-start]:bg-primary data-[selection-start]:text-background data-[selection-end]:rounded-r data-[selection-end]:bg-primary data-[selection-end]:text-background data-[today]:font-semibold",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Day>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Day {...restProps} class={variants({ class: className })} />
