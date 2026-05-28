<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "max-h-72 p-1",
  })

  export type Props = ComponentProps<typeof Select.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.Viewport {...restProps} class={variants({ class: className })} />
