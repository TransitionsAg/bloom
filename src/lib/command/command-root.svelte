<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full flex-col overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface text-foreground",
  })

  export type Props = ComponentProps<typeof Command.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Root {...restProps} class={variants({ class: className })} />
