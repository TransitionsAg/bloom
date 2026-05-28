<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full cursor-default items-center justify-center rounded py-1 text-caption",
  })

  export type Props = ComponentProps<typeof Combobox.ScrollDownButton>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.ScrollDownButton {...restProps} class={variants({ class: className })} />
