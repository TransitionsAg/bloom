<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 max-h-[var(--bits-select-content-available-height)] min-w-[var(--bits-select-anchor-width)] overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-foreground shadow-lg outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof Select.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.Content {...restProps} class={variants({ class: className })} />
