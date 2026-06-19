<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Combobox.Root>
</script>

<script lang="ts">
  let { value = $bindable(), open = $bindable(), ...restProps }: Props = $props()
</script>

<Combobox.Root bind:value={value as never} bind:open {...restProps} />
