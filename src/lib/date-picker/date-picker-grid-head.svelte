<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "block pb-1",
  })

  export type Props = ComponentProps<typeof DatePicker.GridHead>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.GridHead {...restProps} class={variants({ class: className })} />
