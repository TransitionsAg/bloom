<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "max-h-72 overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-foreground shadow-lg outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof Select.ContentStatic>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.ContentStatic {...restProps} class={variants({ class: className })} />
