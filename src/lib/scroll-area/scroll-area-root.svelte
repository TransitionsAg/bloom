<script lang="ts" module>
  import { ScrollArea } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative overflow-hidden rounded-lg border-2 border-border bg-surface text-foreground",
  })

  export type Props = ComponentProps<typeof ScrollArea.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ScrollArea.Root {...restProps} class={variants({ class: className })} />
