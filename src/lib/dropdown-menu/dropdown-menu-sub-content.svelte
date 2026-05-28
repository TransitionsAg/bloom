<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 min-w-44 overflow-hidden rounded-lg border-2 border-border bg-background text-foreground shadow-popover outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof DropdownMenu.SubContent>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.SubContent {...restProps} class={variants({ class: className })} />
