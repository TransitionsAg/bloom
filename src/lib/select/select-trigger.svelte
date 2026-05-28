<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex min-h-12 w-full min-w-56 cursor-pointer select-none items-center gap-3 rounded border-2 border-border bg-field px-4 text-left text-sm text-foreground transition-all hover:bg-field-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-50 data-[placeholder]:text-caption [&_svg]:shrink-0",
  })

  export type Props = ComponentProps<typeof Select.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.Trigger {...restProps} class={variants({ class: className })} />
