<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex cursor-pointer items-center justify-center rounded bg-secondary px-3 py-2 typo-sm text-secondary-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof DatePicker.Close>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Close {...restProps} class={variants({ class: className })} />
