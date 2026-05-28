<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "block select-none text-sm font-semibold text-foreground data-disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.Label>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Label {...restProps} class={variants({ class: className })} />
