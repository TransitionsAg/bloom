<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 min-w-48 overflow-hidden rounded-lg border-2 border-border bg-surface text-foreground outline-none",
  })

  export type Props = ComponentProps<typeof ContextMenu.ContentStatic>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ContextMenu.ContentStatic {...restProps} class={variants({ class: className })} />
