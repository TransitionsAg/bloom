<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "w-fit rounded-md bg-background p-3 text-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
  })

  export type Props = ComponentProps<typeof DatePicker.Calendar>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Calendar {...restProps} class={variants({ class: className })} />
