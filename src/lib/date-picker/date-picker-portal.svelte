<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DatePicker.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<DatePicker.Portal {...restProps} />
