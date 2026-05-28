<script lang="ts" module>
  import { Popover } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Popover.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Popover.Root {...restProps} />
