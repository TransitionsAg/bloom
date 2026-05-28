<script lang="ts" module>
  import { RadioGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "peer inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-border bg-field text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[readonly]:cursor-default data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=unchecked]:hover:bg-muted",
  })

  export type Props = ComponentProps<typeof RadioGroup.Item>
</script>

<script lang="ts">
  const { class: className, child, children: childContent, ...restProps }: Props = $props()
</script>

{#if child}
  <RadioGroup.Item {...restProps} {child} class={variants({ class: className })} />
{:else}
  <RadioGroup.Item {...restProps} class={variants({ class: className })}>
    {#snippet children({ checked })}
      {#if childContent}
        {@render childContent({ checked })}
      {:else if checked}
        <span class="size-2 rounded-full bg-current"></span>
      {/if}
    {/snippet}
  </RadioGroup.Item>
{/if}
