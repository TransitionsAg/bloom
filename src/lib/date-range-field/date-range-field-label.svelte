<script lang="ts" module>
  import { DateRangeField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "select-none typo-sm text-foreground data-[invalid]:text-destructive group-data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DateRangeField.Label>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangeField.Label {...restProps} class={variants({ class: className })} />
