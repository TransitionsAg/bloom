<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface text-foreground shadow-lg transition-[width,height] duration-200 data-[state=closed]:animate-nav-menu-scale-out data-[state=open]:animate-nav-menu-scale-in sm:w-[var(--bits-navigation-menu-viewport-width)]",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Viewport {...restProps} class={variants({ class: className })} />
