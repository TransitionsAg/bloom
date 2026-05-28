<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof AlertDialog.Root>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<AlertDialog.Root {...restProps} />
