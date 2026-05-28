<script lang="ts" module>
  import { Toolbar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex max-w-full items-center rounded-lg bg-surface p-px text-foreground inset-ring-2 inset-ring-border data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  })

  export type Props = ComponentProps<typeof Toolbar.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Toolbar.Root data-bloom-toolbar-root {...restProps} class={variants({ class: className })} />

<style>
  :global([data-bloom-toolbar-root]) > :global([data-bloom-toolbar-group]:first-child) > :global(:first-child) {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :global([data-bloom-toolbar-root]) > :global(:first-child:not([data-bloom-toolbar-group])) {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  :global([data-bloom-toolbar-root]) > :global([data-bloom-toolbar-group]:last-child) > :global(:last-child) {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  :global([data-bloom-toolbar-root]) > :global(:last-child:not([data-bloom-toolbar-group])) {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  :global([data-bloom-toolbar-root][data-orientation="vertical"]) > :global([data-bloom-toolbar-group]:first-child) > :global(:first-child) {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0;
  }

  :global([data-bloom-toolbar-root][data-orientation="vertical"]) > :global(:first-child:not([data-bloom-toolbar-group])) {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0;
  }

  :global([data-bloom-toolbar-root][data-orientation="vertical"]) > :global([data-bloom-toolbar-group]:last-child) > :global(:last-child) {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0;
  }

  :global([data-bloom-toolbar-root][data-orientation="vertical"]) > :global(:last-child:not([data-bloom-toolbar-group])) {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0;
  }
</style>
