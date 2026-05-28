<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full items-center justify-center px-4 py-8 text-sm text-muted-foreground",
  })

  export type Props = ComponentProps<typeof Command.Empty>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Empty {...restProps} class={variants({ class: className })} />
