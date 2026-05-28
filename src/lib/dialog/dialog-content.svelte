<script lang="ts" module>
  import { Dialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fixed left-1/2 top-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-lg inset-ring-2 inset-ring-border bg-background p-7 text-foreground shadow-lg outline-none transition-all duration-200 sm:max-w-lg data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in data-nested-open:scale-[calc(1-var(--bits-dialog-nested-count)*0.05)] data-nested-open:blur-[calc(var(--bits-dialog-nested-count)*1px)]",
  })

  export type Props = ComponentProps<typeof Dialog.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Dialog.Content {...restProps} class={variants({ class: className })} />
