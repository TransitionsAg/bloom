<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 max-h-[var(--bits-combobox-content-available-height)] min-w-[var(--bits-combobox-anchor-width)] overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-foreground outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof Combobox.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Content {...restProps} class={variants({ class: className })} />
