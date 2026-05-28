<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group relative inline-flex size-9 cursor-pointer items-center justify-center rounded border-2 border-transparent bg-transparent text-sm font-medium tabular-nums text-foreground transition-all hover:border-border hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-disabled:pointer-events-none data-disabled:text-disabled-foreground data-disabled:opacity-60 data-outside-month:text-caption data-outside-month:hover:border-transparent data-outside-month:hover:bg-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground data-today:after:absolute data-today:after:bottom-1 data-today:after:size-1 data-today:after:rounded-full data-today:after:bg-current data-unavailable:text-caption data-unavailable:line-through",
  })

  export type Props = ComponentProps<typeof DatePicker.Day>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Day {...restProps} class={variants({ class: className })} />
