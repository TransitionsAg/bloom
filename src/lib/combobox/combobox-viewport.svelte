<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "max-h-72 overflow-y-auto p-1",
  })

  export type Props = ComponentProps<typeof Combobox.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Viewport {...restProps} class={variants({ class: className })} />
