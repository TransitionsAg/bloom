<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "min-w-0 flex-1 truncate text-left",
  })

  export type Props = ComponentProps<typeof Select.Value>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.Value {...restProps} class={variants({ class: className })} />
