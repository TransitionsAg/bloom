<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "w-full border-collapse select-none",
  })

  export type Props = ComponentProps<typeof RangeCalendar.Grid>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.Grid {...restProps} class={variants({ class: className })} />
