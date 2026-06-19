<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DatePicker.Root>
</script>

<script lang="ts">
  let { value = $bindable(), placeholder = $bindable(), open = $bindable(false), ...restProps }: Props = $props()
</script>

<DatePicker.Root bind:value bind:placeholder bind:open {...restProps} />
