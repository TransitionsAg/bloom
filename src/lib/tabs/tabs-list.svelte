<script lang="ts" module>
  import { Tabs } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex items-center rounded-lg inset-ring-2 inset-ring-border bg-surface text-muted-foreground data-[orientation=vertical]:min-h-0 data-[orientation=vertical]:min-w-44 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  })

  export type Props = ComponentProps<typeof Tabs.List>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tabs.List data-bloom-tabs-list {...restProps} class={variants({ class: className })} />

<style>
  :global([data-bloom-tabs-list]:not([data-orientation="vertical"])) > :global(:first-child) {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  :global([data-bloom-tabs-list]:not([data-orientation="vertical"])) > :global(:last-child) {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :global([data-bloom-tabs-list][data-orientation="vertical"]) > :global(:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-left-radius: 0;
  }

  :global([data-bloom-tabs-list][data-orientation="vertical"]) > :global(:last-child) {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top-right-radius: 0;
  }
</style>
