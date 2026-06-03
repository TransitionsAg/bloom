<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "h-2 w-full overflow-hidden rounded-full bg-muted inset-ring-2 inset-ring-border",
  })

  export type Props = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Progress")

  const { class: className, children, ...restProps }: Props = $props()

  const max = $derived(Math.max(0, context.count() - 1))
  const percentage = $derived.by(() => {
    if (max <= 0) return context.count() > 0 ? 100 : 0

    return Math.min(100, Math.max(0, (context.step() / max) * 100))
  })
</script>

<div
  {...restProps}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax={max}
  aria-valuenow={context.step()}
  data-orientation={context.orientation()}
  class={variants({ class: className })}
>
  {#if children}
    {@render children()}
  {:else}
    <div
      class="h-full rounded-full bg-primary transition-transform duration-300 ease-out"
      style={`transform: translateX(-${100 - percentage}%)`}
    ></div>
  {/if}
</div>
