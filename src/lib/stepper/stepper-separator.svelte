<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getOptionalStepperItemContext, getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "absolute left-[calc(50%+1rem)] right-[calc(-50%+0.5rem)] top-4 h-0.5 overflow-hidden rounded-full bg-separator after:absolute after:inset-0 after:block after:origin-left after:scale-x-0 after:scale-y-100 after:bg-primary after:transition-transform after:duration-300 after:content-[''] data-[state=complete]:after:scale-x-100 data-[orientation=vertical]:relative data-[orientation=vertical]:left-auto data-[orientation=vertical]:right-auto data-[orientation=vertical]:top-auto data-[orientation=vertical]:ml-4 data-[orientation=vertical]:h-8 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:flex-none data-[orientation=vertical]:after:origin-top data-[orientation=vertical]:after:scale-x-100 data-[orientation=vertical]:after:scale-y-0 data-[orientation=vertical]:data-[state=complete]:after:scale-y-100",
  })

  export type Props = HTMLAttributes<HTMLDivElement> & {
    index?: number
  }
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Separator")
  const itemContext = getOptionalStepperItemContext()

  const { index, class: className, ...restProps }: Props = $props()

  const targetIndex = $derived(index ?? itemContext?.index() ?? 0)
  const state = $derived(context.step() > targetIndex ? "complete" : "incomplete")
</script>

<div
  {...restProps}
  role="presentation"
  aria-hidden="true"
  data-index={targetIndex}
  data-state={state}
  data-complete={state === "complete" ? "" : undefined}
  data-orientation={context.orientation()}
  class={variants({ class: className })}
></div>
