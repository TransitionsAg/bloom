<script lang="ts" module>
  import { Tooltip } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Tooltip.Root>
</script>

<script lang="ts">
  let { open = $bindable(), ...restProps }: Props = $props()
</script>

<Tooltip.Root bind:open {...restProps} />
