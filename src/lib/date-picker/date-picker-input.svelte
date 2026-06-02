<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-12 w-full min-w-56 select-none items-center gap-0.5 rounded-lg border-2 border-border bg-field px-3 py-2 text-sm font-medium text-field-foreground transition-all hover:bg-field-accent focus-within:border-primary focus-within:outline-none data-disabled:pointer-events-none data-disabled:bg-disabled data-disabled:text-disabled-foreground data-invalid:border-destructive data-invalid:focus-within:border-destructive",
  })

  export type Props = ComponentProps<typeof DatePicker.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Input {...restProps} class={variants({ class: className })} />
