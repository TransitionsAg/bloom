<script lang="ts" module>
  import { Select } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Select.Root>
</script>

<script lang="ts">
  let { value = $bindable(), open = $bindable(), ...restProps }: Props = $props()
</script>

<Select.Root bind:open bind:value={value as never} {...restProps} />
