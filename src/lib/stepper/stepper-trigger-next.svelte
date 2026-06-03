<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLButtonAttributes } from "svelte/elements"

  import { getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "inline-flex cursor-pointer items-center justify-center rounded bg-primary px-5 py-3 typo-p text-primary-foreground transition-all hover:bg-primary-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = HTMLButtonAttributes
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Trigger.Next")

  let {
    disabled = false,
    type = "button",
    onclick,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const isDisabled = $derived(
    Boolean(disabled || context.disabled() || context.step() >= context.count() - 1),
  )

  const handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }): void => {
    onclick?.(event)

    if (event.defaultPrevented || isDisabled) return
    context.setStep(context.step() + 1)
  }
</script>

<button
  {...restProps}
  {type}
  disabled={isDisabled}
  data-disabled={isDisabled ? "" : undefined}
  data-orientation={context.orientation()}
  onclick={handleClick}
  class={variants({ class: className })}
>
  {@render children?.()}
</button>
