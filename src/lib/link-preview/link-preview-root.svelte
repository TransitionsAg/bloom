<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof LinkPreview.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<LinkPreview.Root {...restProps} />
