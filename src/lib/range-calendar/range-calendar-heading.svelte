<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "min-w-36 text-center typo-sm text-foreground",
  })

  export type Props = ComponentProps<typeof RangeCalendar.Heading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.Heading {...restProps} class={variants({ class: className })} />
