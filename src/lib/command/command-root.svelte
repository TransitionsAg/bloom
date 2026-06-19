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
  let { value = $bindable(), class: className, ...restProps }: Props = $props()
</script>

<Command.Root bind:value {...restProps} class={variants({ class: className })} />
