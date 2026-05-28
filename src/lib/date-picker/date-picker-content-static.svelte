<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "rounded-lg border-2 border-border bg-background p-2 text-foreground",
  })

  export type Props = ComponentProps<typeof DatePicker.ContentStatic>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.ContentStatic {...restProps} class={variants({ class: className })} />
