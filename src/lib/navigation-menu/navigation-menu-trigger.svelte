<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group inline-flex h-10 w-max cursor-pointer select-none items-center justify-center gap-2 rounded px-4 typo-sm text-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground data-[state=open]:shadow-sm active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&[data-state=open]>svg]:rotate-180",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<NavigationMenu.Trigger {...restProps} class={variants({ class: className })} />
