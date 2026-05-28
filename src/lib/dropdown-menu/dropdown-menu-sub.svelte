<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DropdownMenu.Sub>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<DropdownMenu.Sub {...restProps} />
