<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "typo-p text-foreground",
  })

  export type Props = HTMLAttributes<HTMLDivElement> & {
    index: number
  }
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Content")

  const { index, class: className, children, ...restProps }: Props = $props()

  const state = $derived(context.getStepState(index))
  const isCurrent = $derived(state === "current")
</script>

<div
  {...restProps}
  hidden={!isCurrent}
  data-index={index}
  data-state={isCurrent ? "current" : "inactive"}
  data-current={isCurrent ? "" : undefined}
  data-orientation={context.orientation()}
  class={variants({ class: className })}
>
  {@render children?.()}
</div>
