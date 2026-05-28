<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "absolute left-0 top-0 w-full outline-none transition-[opacity,transform] duration-200 data-[motion=from-end]:translate-x-4 data-[motion=from-start]:-translate-x-4 data-[motion=to-end]:translate-x-4 data-[motion=to-start]:-translate-x-4 data-[state=closed]:pointer-events-none data-[state=closed]:opacity-0 data-[state=open]:translate-x-0 data-[state=open]:opacity-100 sm:w-auto",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Content {...restProps} class={variants({ class: className })} />
