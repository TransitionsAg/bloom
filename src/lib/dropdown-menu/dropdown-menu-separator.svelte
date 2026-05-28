<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-0.5 bg-border",
  })

  export type Props = ComponentProps<typeof DropdownMenu.Separator>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.Separator {...restProps} class={variants({ class: className })} />
