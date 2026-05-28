<script lang="ts" module>
  import { Progress } from "bits-ui"
  import { cva, type VariantProps } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative w-full overflow-hidden rounded-full bg-muted inset-ring-1 inset-ring-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[disabled]:bg-disabled data-[disabled]:inset-ring-disabled-border",
    variants: {
      size: {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  })

  export type Props = ComponentProps<typeof Progress.Root> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const {
    value = 0,
    min = 0,
    max = 100,
    size,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const percentage = $derived.by(() => {
    if (value === null) return 100

    const range = max - min
    if (range <= 0) return 0

    return Math.min(100, Math.max(0, ((value - min) / range) * 100))
  })
</script>

<Progress.Root
  {...restProps}
  {value}
  {min}
  {max}
  class={variants({ size, class: className })}
>
  {#if children}
    {@render children()}
  {:else}
    <div
      class="h-full rounded-full bg-primary transition-transform duration-300 ease-out"
      style={`transform: translateX(-${100 - percentage}%)`}
    ></div>
  {/if}
</Progress.Root>
