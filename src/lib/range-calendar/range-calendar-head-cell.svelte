<script lang="ts" module>
  import { RangeCalendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "grid size-10 place-items-center rounded text-xs font-medium uppercase tracking-wide text-caption",
  })

  export type Props = ComponentProps<typeof RangeCalendar.HeadCell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RangeCalendar.HeadCell {...restProps} class={variants({ class: className })} />
