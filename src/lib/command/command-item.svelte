<script lang="ts" module>
  import { Command } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex h-10 cursor-pointer select-none items-center gap-3 rounded px-3 text-sm font-medium text-foreground outline-none transition-colors data-[selected]:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus aria-disabled:pointer-events-none aria-disabled:text-disabled-foreground aria-disabled:opacity-60",
  })

  export type Props = ComponentProps<typeof Command.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Command.Item {...restProps} class={variants({ class: className })} />
