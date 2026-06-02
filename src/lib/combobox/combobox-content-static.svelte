<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"
  import { fade } from "svelte/transition"

  export const variants = cva({
    base: "max-h-72 overflow-hidden rounded-lg inset-ring-2 inset-ring-border bg-surface p-1 text-foreground outline-none",
  })

  export type Props = ComponentProps<typeof Combobox.ContentStatic>
</script>

<script lang="ts">
  const { class: className, child: customChild, children, forceMount: forceMountProp, ...restProps }: Props = $props()
  const forceMount = $derived(forceMountProp ?? true)
</script>

{#if customChild}
  <Combobox.ContentStatic {...restProps} child={customChild} forceMount={forceMountProp} class={variants({ class: className })} />
{:else}
  <Combobox.ContentStatic {...restProps} {forceMount} class={variants({ class: className })}>
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:fade={{ duration: 120 }}>
          {@render children?.()}
        </div>
      {/if}
    {/snippet}
  </Combobox.ContentStatic>
{/if}
