<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fill-surface",
  })

  export type Props = ComponentProps<typeof ContextMenu.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ContextMenu.Arrow {...restProps} class={variants({ class: className })} />
