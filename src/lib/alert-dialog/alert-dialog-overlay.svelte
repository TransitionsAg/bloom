<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm data-[state=closed]:animate-dialog-overlay-out data-[state=open]:animate-dialog-overlay-in",
  })

  export type Props = ComponentProps<typeof AlertDialog.Overlay>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<AlertDialog.Overlay {...restProps} class={variants({ class: className })} />
