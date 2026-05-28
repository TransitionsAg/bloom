<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "max-h-72 overflow-y-auto overflow-x-hidden p-2",
  })

  export type Props = ComponentProps<typeof Command.List>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.List {...restProps} class={variants({ class: className })} />
