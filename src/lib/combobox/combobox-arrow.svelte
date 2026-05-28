<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fill-surface stroke-border",
  })

  export type Props = ComponentProps<typeof Combobox.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Arrow {...restProps} class={variants({ class: className })} />
