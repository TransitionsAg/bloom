<script lang="ts" module>
  import { Toggle } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-10 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded px-3 typo-sm text-muted-foreground transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary-accent active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  })

  export type Props = ComponentProps<typeof Toggle.Root>
</script>

<script lang="ts">
  let { pressed = $bindable(false), class: className, ...restProps }: Props = $props()
</script>

<Toggle.Root bind:pressed {...restProps} class={variants({ class: className })} />
