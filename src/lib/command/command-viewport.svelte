<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex flex-col gap-1",
  })

  export type Props = ComponentProps<typeof Command.Viewport>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Viewport {...restProps} class={variants({ class: className })} />
