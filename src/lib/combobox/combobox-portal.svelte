<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Combobox.Portal>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Combobox.Portal {...restProps} />
