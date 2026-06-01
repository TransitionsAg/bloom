<script lang="ts" module>
  import { PinInput } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex size-12 items-center justify-center rounded border-2 border-border bg-field font-mono text-xl font-semibold tabular-nums text-foreground outline-none transition-all group-hover/pin-input:bg-secondary data-[active]:border-primary data-[active]:bg-background",
  })

  export type Props = ComponentProps<typeof PinInput.Cell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<PinInput.Cell {...restProps} class={variants({ class: className })} />
