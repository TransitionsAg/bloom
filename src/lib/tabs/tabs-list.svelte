<script lang="ts" module>
  import { Tabs } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex min-h-12 items-center gap-1 rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-muted-foreground data-[orientation=vertical]:min-h-0 data-[orientation=vertical]:min-w-44 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  })

  export type Props = ComponentProps<typeof Tabs.List>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tabs.List {...restProps} class={variants({ class: className })} />
