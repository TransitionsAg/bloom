<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"
  import { fade } from "svelte/transition"

  export const variants = cva({
    base: "z-50 rounded-lg border-2 border-border bg-background p-2 text-foreground outline-none",
  })

  export type Props = ComponentProps<typeof DatePicker.Content>
</script>

<script lang="ts">
  const { class: className, child: customChild, children, forceMount: forceMountProp, ...restProps }: Props = $props()
  const forceMount = $derived(forceMountProp ?? true)
</script>

{#if customChild}
  <DatePicker.Content {...restProps} child={customChild} forceMount={forceMountProp} class={variants({ class: className })} />
{:else}
  <DatePicker.Content {...restProps} {forceMount} class={variants({ class: className })}>
    {#snippet child({ props, wrapperProps, open })}
      {#if open}
        <div {...wrapperProps}>
          <div {...props} transition:fade={{ duration: 120 }}>
            {@render children?.()}
          </div>
        </div>
      {/if}
    {/snippet}
  </DatePicker.Content>
{/if}
