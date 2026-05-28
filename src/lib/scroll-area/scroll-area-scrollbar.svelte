<script lang="ts" module>
  import { ScrollArea } from "bits-ui"
  import { cva, type VariantProps } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex touch-none select-none bg-muted p-0.5 transition-all duration-200 data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100 hover:bg-muted-accent",
    variants: {
      orientation: {
        vertical: "h-full w-3 border-l-2 border-l-transparent",
        horizontal: "h-3 w-full flex-col border-t-2 border-t-transparent",
      },
    },
  })

  export type Props = ComponentProps<typeof ScrollArea.Scrollbar> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const { orientation, class: className, ...restProps }: Props = $props()
</script>

<ScrollArea.Scrollbar
  {...restProps}
  {orientation}
  class={variants({ orientation, class: className })}
/>
