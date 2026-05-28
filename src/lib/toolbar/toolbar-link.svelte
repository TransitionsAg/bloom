<script lang="ts" module>
  import { Toolbar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-10 select-none items-center justify-center gap-2 whitespace-nowrap rounded px-3 text-sm font-semibold text-foreground no-underline transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  })

  export type Props = ComponentProps<typeof Toolbar.Link>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Toolbar.Link {...restProps} class={variants({ class: className })} />
