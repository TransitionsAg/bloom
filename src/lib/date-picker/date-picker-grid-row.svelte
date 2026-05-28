<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full justify-between gap-1",
  })

  export type Props = ComponentProps<typeof DatePicker.GridRow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.GridRow {...restProps} class={variants({ class: className })} />
