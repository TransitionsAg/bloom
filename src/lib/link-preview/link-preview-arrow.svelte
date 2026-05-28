<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fill-surface text-surface",
  })

  export type Props = ComponentProps<typeof LinkPreview.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<LinkPreview.Arrow {...restProps} class={variants({ class: className })} />
