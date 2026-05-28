<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-caption",
  })

  export type Props = ComponentProps<typeof RangeCalendar.GridHead>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.GridHead {...restProps} class={variants({ class: className })} />
