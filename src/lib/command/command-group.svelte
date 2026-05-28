<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "py-1",
  })

  export type Props = ComponentProps<typeof Command.Group>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Group {...restProps} class={variants({ class: className })} />
