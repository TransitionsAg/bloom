<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-10 rounded-md border-2 border-border bg-background px-3 text-sm font-medium text-foreground transition-all focus-visible:border-primary focus-visible:outline-none disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50",
  })

  export type Props = ComponentProps<typeof Calendar.YearSelect>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.YearSelect {...restProps} class={variants({ class: className })} />
