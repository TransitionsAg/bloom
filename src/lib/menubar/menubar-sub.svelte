<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Menubar.Sub>
</script>

<script lang="ts">
  let { open = $bindable(false), ...restProps }: Props = $props()
</script>

<Menubar.Sub bind:open {...restProps} />
