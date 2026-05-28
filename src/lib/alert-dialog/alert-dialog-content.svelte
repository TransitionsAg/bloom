<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fixed left-1/2 top-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-lg inset-ring-2 inset-ring-border bg-background p-7 text-foreground shadow-[0_24px_60px_-28px_rgba(34,34,34,0.45)] outline-none sm:max-w-lg data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof AlertDialog.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<AlertDialog.Content {...restProps} class={variants({ class: className })} />
