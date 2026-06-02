<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"
  import { fade } from "svelte/transition"

  export const variants = cva({
    base: "z-50 max-h-[var(--bits-select-content-available-height)] min-w-[var(--bits-select-anchor-width)] overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-foreground shadow-lg outline-none",
  })

  export type Props = ComponentProps<typeof Select.Content>
</script>

<script lang="ts">
  const { class: className, child: customChild, children, forceMount: forceMountProp, ...restProps }: Props = $props()
  const forceMount = $derived(forceMountProp ?? true)
</script>

{#if customChild}
  <Select.Content {...restProps} child={customChild} forceMount={forceMountProp} class={variants({ class: className })} />
{:else}
  <Select.Content {...restProps} {forceMount} class={variants({ class: className })}>
    {#snippet child({ props, wrapperProps, open })}
      {#if open}
        <div {...wrapperProps}>
          <div {...props} transition:fade={{ duration: 120 }}>
            {@render children?.()}
          </div>
        </div>
      {/if}
    {/snippet}
  </Select.Content>
{/if}
