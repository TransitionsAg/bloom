<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "min-w-32 text-center typo-sm text-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.Heading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Heading {...restProps} class={variants({ class: className })} />
