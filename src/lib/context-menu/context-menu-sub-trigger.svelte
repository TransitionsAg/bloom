<script lang="ts" module>
  import { ContextMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex min-h-9 w-full select-none items-center gap-2 px-4 py-2 text-sm font-medium outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-highlighted:bg-secondary data-highlighted:text-secondary-foreground",
  })

  export type Props = ComponentProps<typeof ContextMenu.SubTrigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ContextMenu.SubTrigger {...restProps} class={variants({ class: className })} />
