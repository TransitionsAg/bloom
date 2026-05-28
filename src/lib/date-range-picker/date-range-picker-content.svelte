<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 w-[calc(100vw-2rem)] max-w-max rounded-lg border-2 border-border bg-background text-foreground shadow-lg outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in sm:w-auto",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Content {...restProps} class={variants({ class: className })} />
