<script lang="ts" module>
  import { Popover } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-12 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded bg-primary px-[21px] text-[15px] font-semibold text-primary-foreground transition-all hover:bg-primary-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-primary-accent active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof Popover.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Popover.Trigger {...restProps} class={variants({ class: className })} />
