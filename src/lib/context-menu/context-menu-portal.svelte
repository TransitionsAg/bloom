<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof ContextMenu.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<ContextMenu.Portal {...restProps} />
