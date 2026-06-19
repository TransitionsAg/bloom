<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative z-10 flex w-full items-center justify-center text-foreground data-[orientation=vertical]:items-start",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Root>
</script>

<script lang="ts">
  let { value = $bindable(""), class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Root bind:value {...restProps} class={variants({ class: className })} />
