<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getOptionalStepperItemContext, getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "relative isolate flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background typo-sm text-muted-foreground transition-colors duration-200 inset-ring-2 inset-ring-border [&>span]:relative [&>span]:z-10 data-[state=current]:bg-primary data-[state=current]:text-primary-foreground data-[state=current]:inset-ring-primary data-[state=complete]:bg-primary data-[state=complete]:text-primary-foreground data-[state=complete]:inset-ring-primary",
  })

  export type Props = HTMLAttributes<HTMLSpanElement> & {
    index?: number
  }
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Indicator")
  const itemContext = getOptionalStepperItemContext()

  const { index, class: className, children, ...restProps }: Props = $props()

  const targetIndex = $derived(index ?? itemContext?.index() ?? 0)
  const state = $derived(context.getStepState(targetIndex))
</script>

<span
  {...restProps}
  data-index={targetIndex}
  data-state={state}
  data-current={state === "current" ? "" : undefined}
  data-complete={state === "complete" ? "" : undefined}
  data-orientation={context.orientation()}
  class={variants({ class: className })}
>
  <span>
    {#if children}
      {@render children()}
    {:else}
      {targetIndex + 1}
    {/if}
  </span>
</span>
