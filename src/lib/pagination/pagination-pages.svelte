<script lang="ts" module>
  import { type WithElementRef } from "bits-ui"
  import { cva } from "cva"
    import type { HTMLAttributes } from "svelte/elements";

  export const variants = cva({
    base: "flex flex-row rounded bg-secondary inset-ring-2 inset-ring-border",
  })

  export type Props = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<div {...restProps} class={variants({ class: className })}>
  {@render children?.()}
</div>

<style>
  div > :global(:first-child) {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  div > :global(:last-child) {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
</style>
