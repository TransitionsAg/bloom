<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex size-9 items-center justify-center rounded typo-xs text-caption",
  })

  export type Props = ComponentProps<typeof DatePicker.HeadCell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.HeadCell {...restProps} class={variants({ class: className })} />
