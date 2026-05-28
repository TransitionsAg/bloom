<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-0.5 bg-separator",
  })

  export type Props = ComponentProps<typeof ContextMenu.Separator>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ContextMenu.Separator {...restProps} class={variants({ class: className })} />
