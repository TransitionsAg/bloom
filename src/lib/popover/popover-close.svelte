<script lang="ts" module>
  import { Popover } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex cursor-pointer select-none items-center justify-center rounded bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof Popover.Close>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Popover.Close {...restProps} class={variants({ class: className })} />
