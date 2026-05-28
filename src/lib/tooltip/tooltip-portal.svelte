<script lang="ts" module>
  import { Tooltip } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Tooltip.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Tooltip.Portal {...restProps} />
