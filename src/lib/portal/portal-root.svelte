<script lang="ts" module>
  import { Portal } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Portal {...restProps} />
