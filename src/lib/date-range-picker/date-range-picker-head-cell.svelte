<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex size-10 items-center justify-center text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground",
  })

  export type Props = ComponentProps<typeof DateRangePicker.HeadCell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.HeadCell {...restProps} class={variants({ class: className })} />
