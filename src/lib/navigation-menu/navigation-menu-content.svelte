<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "absolute left-0 top-0 w-full outline-none data-[motion=from-end]:animate-nav-menu-enter-from-right data-[motion=from-start]:animate-nav-menu-enter-from-left data-[motion=to-end]:animate-nav-menu-exit-to-right data-[motion=to-start]:animate-nav-menu-exit-to-left sm:w-auto",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Content {...restProps} class={variants({ class: className })} />
