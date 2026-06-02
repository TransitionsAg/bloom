<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex-1 text-center typo-sm text-foreground data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Heading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Heading {...restProps} class={variants({ class: className })} />
