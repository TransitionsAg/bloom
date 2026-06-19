<script lang="ts" module>
  import { Popover } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Popover.Root>
</script>

<script lang="ts">
  let { open = $bindable(false), ...restProps }: Props = $props()
</script>

<Popover.Root bind:open {...restProps} />
