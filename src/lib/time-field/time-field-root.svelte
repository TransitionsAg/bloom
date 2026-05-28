<script lang="ts" module>
  import { TimeField } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof TimeField.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<TimeField.Root {...restProps} />
