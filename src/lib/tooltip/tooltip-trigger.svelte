<script lang="ts" module>
  import { Tooltip } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex cursor-pointer items-center justify-center rounded text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 data-[state=open]:text-primary",
  })

  export type Props = ComponentProps<typeof Tooltip.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tooltip.Trigger {...restProps} class={variants({ class: className })} />
