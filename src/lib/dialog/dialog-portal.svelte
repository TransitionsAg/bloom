<script lang="ts" module>
  import { Dialog } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Dialog.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Dialog.Portal {...restProps} />
