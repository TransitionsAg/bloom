<script lang="ts" module>
  import { Select } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Select.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Select.Portal {...restProps} />
