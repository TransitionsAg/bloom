<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex select-none items-center justify-center rounded typo-sm text-foreground no-underline transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[active]:bg-secondary data-[active]:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Link>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Link {...restProps} class={variants({ class: className })} />
