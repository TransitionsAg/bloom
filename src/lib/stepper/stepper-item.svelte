<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getStepperContext, setStepperItemContext } from "./stepper-context.js"

  export const variants = cva({
    base: "group relative flex min-w-0 flex-1 flex-col items-center gap-2 data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-0",
  })

  export type Props = HTMLAttributes<HTMLDivElement> & {
    disabled?: boolean
    index: number
  }
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.Item")

  let {
    index,
    disabled = false,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const state = $derived(context.getStepState(index))
  const isDisabled = $derived(Boolean(disabled || context.disabled()))

  setStepperItemContext({
    disabled: () => disabled,
    index: () => index,
  })
</script>

<div
  {...restProps}
  role="listitem"
  data-index={index}
  data-state={state}
  data-current={state === "current" ? "" : undefined}
  data-complete={state === "complete" ? "" : undefined}
  data-disabled={isDisabled ? "" : undefined}
  data-orientation={context.orientation()}
  class={variants({ class: className })}
>
  {@render children?.()}
</div>
