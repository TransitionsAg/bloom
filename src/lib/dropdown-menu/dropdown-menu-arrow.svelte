<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "fill-background",
  })

  export type Props = ComponentProps<typeof DropdownMenu.Arrow>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.Arrow {...restProps} class={variants({ class: className })} />
