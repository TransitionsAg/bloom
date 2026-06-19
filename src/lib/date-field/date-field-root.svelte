<script lang="ts" module>
  import { DateField } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DateField.Root>
</script>

<script lang="ts">
  let { value = $bindable(), placeholder = $bindable(), ...restProps }: Props = $props()
</script>

<DateField.Root bind:value bind:placeholder {...restProps} />
