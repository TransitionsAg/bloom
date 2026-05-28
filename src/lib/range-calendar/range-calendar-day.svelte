<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative inline-flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-transparent p-0 text-sm font-medium text-foreground transition-all hover:border-border hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[outside-month]:pointer-events-none data-[outside-month]:text-caption data-[outside-month]:opacity-55 data-[unavailable]:text-disabled-foreground data-[unavailable]:line-through data-[highlighted]:w-full data-[highlighted]:rounded-none data-[highlighted]:bg-secondary data-[selected]:w-full data-[selected]:rounded-none data-[selected]:bg-secondary data-[selected]:text-foreground data-[selection-start]:rounded-l-md data-[selection-start]:border-primary data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-end]:rounded-r-md data-[selection-end]:border-primary data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[today]:font-semibold",
  })

  export type Props = ComponentProps<typeof RangeCalendar.Day>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.Day {...restProps} class={variants({ class: className })} />
