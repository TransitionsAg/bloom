<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DatePicker.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<DatePicker.Root {...restProps} />
