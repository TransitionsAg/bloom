<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLButtonAttributes } from "svelte/elements"

  import { getOptionalStepperItemContext, getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "flex min-w-0 cursor-pointer items-center gap-2 typo-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:text-center data-[orientation=vertical]:flex-row data-[orientation=vertical]:text-left data-[state=current]:text-foreground data-[state=complete]:text-foreground",
  })

  export type Props = HTMLButtonAttributes & {
    index?: number
  }
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Trigger")
  const itemContext = getOptionalStepperItemContext()

  let {
    index,
    disabled = false,
    type = "button",
    onclick,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const targetIndex = $derived(index ?? itemContext?.index() ?? 0)
  const state = $derived(context.getStepState(targetIndex))
  const isDisabled = $derived(
    Boolean(
      disabled ||
        context.disabled() ||
        itemContext?.disabled() ||
        (context.linear() && targetIndex > context.step() + 1),
    ),
  )

  const handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }): void => {
    onclick?.(event)

    if (event.defaultPrevented || isDisabled) return

    context.setStep(targetIndex)
  }
</script>

<button
  {...restProps}
  {type}
  disabled={isDisabled}
  aria-current={state === "current" ? "step" : undefined}
  data-index={targetIndex}
  data-state={state}
  data-current={state === "current" ? "" : undefined}
  data-complete={state === "complete" ? "" : undefined}
  data-disabled={isDisabled ? "" : undefined}
  data-orientation={context.orientation()}
  onclick={handleClick}
  class={variants({ class: className })}
>
  {@render children?.()}
</button>
