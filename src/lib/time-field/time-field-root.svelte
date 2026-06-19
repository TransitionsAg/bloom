<script lang="ts" module>
  import { TimeField } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof TimeField.Root>
</script>

<script lang="ts">
  let { value = $bindable(), placeholder = $bindable(), ...restProps }: Props = $props()
</script>

<TimeField.Root bind:value bind:placeholder {...restProps} />
