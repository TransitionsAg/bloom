<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof ContextMenu.Sub>
</script>

<script lang="ts">
  let { open = $bindable(false), ...restProps }: Props = $props()
</script>

<ContextMenu.Sub bind:open {...restProps} />
