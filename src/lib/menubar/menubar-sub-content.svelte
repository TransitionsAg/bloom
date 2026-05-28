<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 min-w-44 overflow-hidden rounded-lg border-2 border-border bg-background text-foreground shadow-popover outline-none data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in",
  })

  export type Props = ComponentProps<typeof Menubar.SubContent>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.SubContent {...restProps} class={variants({ class: className })} />
