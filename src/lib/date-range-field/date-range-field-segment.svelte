<script lang="ts" module>
  import { DateRangeField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex min-w-[1.5ch] rounded px-1 py-0.5 text-center tabular-nums outline-none transition-colors data-[segment=literal]:min-w-0 data-[segment=literal]:px-0.5 data-[segment=literal]:text-muted-foreground aria-[valuetext=Empty]:text-caption data-[invalid]:text-destructive data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DateRangeField.Segment>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangeField.Segment {...restProps} class={variants({ class: className })} />
