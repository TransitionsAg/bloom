<script lang="ts" module>
  import { ScrollArea } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex-1 rounded-full bg-muted-foreground transition-colors before:absolute before:left-1/2 before:top-1/2 before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-foreground",
  })

  export type Props = ComponentProps<typeof ScrollArea.Thumb>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ScrollArea.Thumb {...restProps} class={variants({ class: className })} />
