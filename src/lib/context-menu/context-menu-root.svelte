<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof ContextMenu.Root>
</script>

<script lang="ts">
  let { open = $bindable(), ...restProps }: Props = $props()
</script>

<ContextMenu.Root bind:open {...restProps} />
