<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof LinkPreview.Root>
</script>

<script lang="ts">
  let { open = $bindable(false), ...restProps }: Props = $props()
</script>

<LinkPreview.Root bind:open {...restProps} />
