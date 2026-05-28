<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "mb-3 flex items-center justify-between gap-3",
  })

  export type Props = ComponentProps<typeof DatePicker.Header>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Header {...restProps} class={variants({ class: className })} />
