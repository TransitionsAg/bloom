<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 w-[min(22rem,calc(100vw-2rem))] rounded-lg inset-ring-2 inset-ring-border bg-surface p-4 text-foreground shadow-lg outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof LinkPreview.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<LinkPreview.Content {...restProps} class={variants({ class: className })} />
