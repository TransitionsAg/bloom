<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"
  import { fade } from "svelte/transition"

  export const variants = cva({
    base: "fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm",
  })

  export type Props = ComponentProps<typeof AlertDialog.Overlay>
</script>

<script lang="ts">
  const { class: className, child: customChild, children, forceMount: forceMountProp, ...restProps }: Props = $props()
  const forceMount = $derived(forceMountProp ?? true)
</script>

{#if customChild}
  <AlertDialog.Overlay {...restProps} child={customChild} forceMount={forceMountProp} class={variants({ class: className })} />
{:else}
  <AlertDialog.Overlay {...restProps} {forceMount} class={variants({ class: className })}>
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:fade={{ duration: 150 }}>
          {@render children?.({ open })}
        </div>
      {/if}
    {/snippet}
  </AlertDialog.Overlay>
{/if}
