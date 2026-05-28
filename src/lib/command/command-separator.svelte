<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "mx-2 my-2 h-px bg-separator",
  })

  export type Props = ComponentProps<typeof Command.Separator>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Separator {...restProps} class={variants({ class: className })} />
