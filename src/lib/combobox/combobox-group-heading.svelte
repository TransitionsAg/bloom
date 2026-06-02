<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "px-3 py-2 typo-xs uppercase tracking-wide text-caption",
  })

  export type Props = ComponentProps<typeof Combobox.GroupHeading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.GroupHeading {...restProps} class={variants({ class: className })} />
