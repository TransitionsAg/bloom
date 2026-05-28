<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-12 w-full border-0 border-b-2 border-separator bg-background px-4 text-sm text-foreground placeholder:text-caption focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Command.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Input {...restProps} class={variants({ class: className })} />
