<script lang="ts" module>
  import { BitsConfig } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof BitsConfig>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<BitsConfig {...restProps} />
