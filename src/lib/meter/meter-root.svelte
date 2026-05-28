<script lang="ts" module>
  import { Meter } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative h-3 w-full overflow-hidden rounded-full bg-secondary inset-ring-2 inset-ring-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
  })

  export type Props = ComponentProps<typeof Meter.Root>
</script>

<script lang="ts">
  const {
    value = 0,
    min = 0,
    max = 100,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const percentage = $derived.by(() => {
    const range = max - min

    if (!Number.isFinite(range) || range <= 0) return 0

    return Math.min(100, Math.max(0, ((value - min) / range) * 100))
  })
</script>

<Meter.Root
  {...restProps}
  {value}
  {min}
  {max}
  class={variants({ class: className })}
>
  {#if children}
    {@render children()}
  {:else}
    <div
      class="h-full w-full rounded-full bg-primary transition-transform duration-300 ease-out"
      style="transform: translateX(-{100 - percentage}%)"
    ></div>
  {/if}
</Meter.Root>
