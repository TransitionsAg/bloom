<script lang="ts" module>
  import { NavigationMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "top-full z-10 flex h-3 items-end justify-center overflow-hidden transition-[opacity,transform] duration-200 data-[state=hidden]:animate-dialog-overlay-out data-[state=hidden]:opacity-0 data-[state=visible]:animate-dialog-overlay-in data-[state=visible]:opacity-100",
  })

  export type Props = ComponentProps<typeof NavigationMenu.Indicator>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<NavigationMenu.Indicator {...restProps} class={variants({ class: className })}>
  {#if children}
    {@render children()}
  {:else}
    <div class="relative top-[70%] size-3 rotate-45 rounded-sm border-l-2 border-t-2 border-border bg-surface"></div>
  {/if}
</NavigationMenu.Indicator>
