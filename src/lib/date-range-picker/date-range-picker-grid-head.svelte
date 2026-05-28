<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-muted-foreground",
  })

  export type Props = ComponentProps<typeof DateRangePicker.GridHead>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.GridHead {...restProps} class={variants({ class: className })} />
