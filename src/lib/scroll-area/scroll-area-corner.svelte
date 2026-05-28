<script lang="ts" module>
  import { ScrollArea } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "bg-muted",
  })

  export type Props = ComponentProps<typeof ScrollArea.Corner>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ScrollArea.Corner {...restProps} class={variants({ class: className })} />
