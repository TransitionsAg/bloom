<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface text-foreground shadow-lg transition-[width,height,opacity] duration-200 data-[state=closed]:animate-dialog-overlay-out data-[state=closed]:opacity-0 data-[state=open]:animate-dialog-overlay-in data-[state=open]:opacity-100 sm:w-[var(--bits-navigation-menu-viewport-width)]",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Viewport {...restProps} class={variants({ class: className })} />
