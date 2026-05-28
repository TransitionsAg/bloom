<script lang="ts" module>
  import { DateField } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof DateField.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<DateField.Root {...restProps} />
