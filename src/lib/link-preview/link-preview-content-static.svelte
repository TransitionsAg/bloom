<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"
  import { fade } from "svelte/transition"

  export const variants = cva({
    base: "w-[min(22rem,calc(100vw-2rem))] rounded-lg inset-ring-2 inset-ring-border bg-surface p-4 text-foreground shadow-lg outline-none",
  })

  export type Props = ComponentProps<typeof LinkPreview.ContentStatic>
</script>

<script lang="ts">
  const { class: className, child: customChild, children, forceMount: forceMountProp, ...restProps }: Props = $props()
  const forceMount = $derived(forceMountProp ?? true)
</script>

{#if customChild}
  <LinkPreview.ContentStatic {...restProps} child={customChild} forceMount={forceMountProp} class={variants({ class: className })} />
{:else}
  <LinkPreview.ContentStatic {...restProps} {forceMount} class={variants({ class: className })}>
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:fade={{ duration: 120 }}>
          {@render children?.()}
        </div>
      {/if}
    {/snippet}
  </LinkPreview.ContentStatic>
{/if}
