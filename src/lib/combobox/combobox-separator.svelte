<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "my-1 h-px bg-separator",
  })

  export type Props = ComponentProps<typeof Combobox.Separator>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Separator {...restProps} class={variants({ class: className })} />
