<script lang="ts" module>
  import { Popover } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Popover.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Popover.Portal {...restProps} />
