<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "rounded px-1.5 py-1 tabular-nums text-foreground outline-none transition-colors focus:bg-secondary focus:text-secondary-foreground data-[segment=literal]:px-0.5 data-[segment=literal]:text-muted-foreground data-[segment=literal]:focus:bg-transparent data-[segment=literal]:focus:text-muted-foreground data-[valuetext=Empty]:text-caption data-disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.Segment>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Segment {...restProps} class={variants({ class: className })} />
