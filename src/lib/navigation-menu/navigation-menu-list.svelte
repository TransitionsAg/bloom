<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group flex list-none items-center justify-center gap-1 rounded-lg bg-background p-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  })

  export type Props = ComponentProps<typeof NavigationMenu.List>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.List {...restProps} class={variants({ class: className })} />
