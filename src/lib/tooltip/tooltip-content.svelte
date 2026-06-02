<script lang="ts" module>
  import { Tooltip } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 max-w-xs overflow-visible rounded-lg border-2 border-border bg-surface px-3 py-2 text-sm font-medium leading-5 text-foreground shadow-lg outline-none transition-opacity duration-150 data-[state=closed]:opacity-0 data-[state=delayed-open]:opacity-100 data-[state=instant-open]:opacity-100",
  })

  export type Props = ComponentProps<typeof Tooltip.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tooltip.Content {...restProps} class={variants({ class: className })} />
