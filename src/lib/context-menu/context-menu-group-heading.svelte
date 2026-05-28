<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "px-4 py-1.5 text-xs font-medium text-caption",
  })

  export type Props = ComponentProps<typeof ContextMenu.GroupHeading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ContextMenu.GroupHeading {...restProps} class={variants({ class: className })} />
