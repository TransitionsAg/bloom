<script lang="ts" module>
  import { Tabs } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "rounded-lg inset-ring-2 inset-ring-border bg-surface p-5 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[orientation=vertical]:mt-0",
  })

  export type Props = ComponentProps<typeof Tabs.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tabs.Content {...restProps} class={variants({ class: className })} />
