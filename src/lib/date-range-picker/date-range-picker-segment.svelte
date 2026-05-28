<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex rounded px-1 py-0.5 text-foreground outline-none transition-colors data-[segment=literal]:px-0 data-[segment=literal]:text-muted-foreground data-[disabled]:text-disabled-foreground data-[invalid]:text-destructive aria-[valuetext=Empty]:text-muted-foreground focus:bg-secondary focus:text-secondary-foreground",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Segment>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Segment {...restProps} class={variants({ class: className })} />
