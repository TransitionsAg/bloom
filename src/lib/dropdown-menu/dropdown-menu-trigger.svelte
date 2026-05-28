<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "",
  })

  export type Props = ComponentProps<typeof DropdownMenu.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.Trigger {...restProps} class={variants({ class: className })} />
