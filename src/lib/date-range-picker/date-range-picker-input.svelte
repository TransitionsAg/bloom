<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-12 w-full min-w-0 select-none items-center gap-0.5 rounded-lg border-2 border-border bg-field px-3 py-2 text-sm text-field-foreground transition-all hover:bg-field-accent focus-within:border-primary focus-within:outline-none data-[disabled]:pointer-events-none data-[disabled]:bg-disabled data-[disabled]:text-disabled-foreground data-[invalid]:border-destructive data-[invalid]:focus-within:border-destructive",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Input {...restProps} class={variants({ class: className })} />
