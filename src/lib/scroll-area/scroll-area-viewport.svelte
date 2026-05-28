<script lang="ts" module>
  import { ScrollArea } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-full w-full rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
  })

  export type Props = ComponentProps<typeof ScrollArea.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ScrollArea.Viewport {...restProps} class={variants({ class: className })} />
