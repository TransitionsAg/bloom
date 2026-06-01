<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-12 w-full border-0 border-b-2 border-separator bg-background px-4 text-sm text-foreground transition-colors placeholder:text-caption focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Command.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Input {...restProps} class={variants({ class: className })} />
