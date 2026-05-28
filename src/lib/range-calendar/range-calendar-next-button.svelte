<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex size-9 cursor-pointer items-center justify-center rounded-md border-2 border-border bg-background text-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof RangeCalendar.NextButton>
</script>

<script lang="ts">
  import { CaretRight } from "phosphor-svelte"

  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.NextButton {...restProps} class={variants({ class: className })}>
  <CaretRight class="size-4" weight="bold" />
</RangeCalendar.NextButton>
