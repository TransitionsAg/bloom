<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "grid gap-2",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Sub>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Sub {...restProps} class={variants({ class: className })} />
