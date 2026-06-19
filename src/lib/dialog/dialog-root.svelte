<script lang="ts" module>
  import { Dialog } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Dialog.Root>
</script>

<script lang="ts">
  // `open` must be pulled out as `$bindable` and forwarded with `bind:open`:
  // a plain `{...restProps}` spread only passes values down, so bits-ui's
  // internal close never propagates back to a consumer's `bind:open`, leaving
  // their state stuck `true` (the dialog then only ever opens once).
  let { open = $bindable(), ...restProps }: Props = $props()
</script>

<Dialog.Root bind:open {...restProps} />
