<script lang="ts" module>
  import { Checkbox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "peer inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded border-2 border-border bg-field text-background transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[readonly]:cursor-default data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=unchecked]:hover:bg-muted",
  })

  export type Props = ComponentProps<typeof Checkbox.Root>
</script>

<script lang="ts">
  const { class: className, child, children: childContent, ...restProps }: Props = $props()
</script>

{#if child}
  <Checkbox.Root {...restProps} {child} class={variants({ class: className })} />
{:else}
  <Checkbox.Root {...restProps} class={variants({ class: className })}>
    {#snippet children({ checked, indeterminate })}
      {#if childContent}
        {@render childContent({ checked, indeterminate })}
      {:else}
        <span class="inline-flex size-3.5 items-center justify-center">
          {#if indeterminate}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5" aria-hidden="true">
              <path d="M3.5 8h9" />
            </svg>
          {:else if checked}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" aria-hidden="true">
              <path d="m3.5 8 3 3 6-6" />
            </svg>
          {/if}
        </span>
      {/if}
    {/snippet}
  </Checkbox.Root>
{/if}
