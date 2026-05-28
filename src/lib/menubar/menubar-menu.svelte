<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import type { ComponentProps } from "svelte"

  export type Props = ComponentProps<typeof Menubar.Menu>
</script>

<script lang="ts">
  const { ...restProps }: Props = $props()
</script>

<Menubar.Menu {...restProps} />
