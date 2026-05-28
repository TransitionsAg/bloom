<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "ml-auto inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded text-muted-foreground transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof DatePicker.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Trigger {...restProps} class={variants({ class: className })} />
