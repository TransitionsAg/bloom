<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "grid w-full grid-cols-7 gap-0",
  })

  export type Props = ComponentProps<typeof RangeCalendar.GridRow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.GridRow {...restProps} class={variants({ class: className })} />
