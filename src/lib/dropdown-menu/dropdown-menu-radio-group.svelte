<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DropdownMenu.RadioGroup>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<DropdownMenu.RadioGroup {...restProps} />
