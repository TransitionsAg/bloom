<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "py-1",
  })

  export type Props = ComponentProps<typeof DropdownMenu.Group>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.Group {...restProps} class={variants({ class: className })} />
