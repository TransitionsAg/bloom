<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-block rounded-xl inset-ring-2 inset-ring-border bg-surface p-4 text-foreground data-[disabled]:text-disabled-foreground data-[invalid]:inset-ring-destructive",
  })

  export type Props = ComponentProps<typeof RangeCalendar.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.Root {...restProps} class={variants({ class: className })} />
