<script lang="ts" module>
  import { cva, type VariantProps } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import {
    setStepperContext,
    type StepperOrientation,
    type StepperStepChangeDetails,
    type StepperStepInvalidDetails,
    type StepperStepState,
  } from "./stepper-context.js"

  export const variants = cva({
    base: "flex flex-col gap-4 text-foreground data-[orientation=horizontal]:w-full data-[disabled]:text-disabled-foreground data-[disabled]:opacity-60",
    variants: {
      variant: {
        default: "",
        transparent: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  })

  export type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants> & {
    count: number
    defaultStep?: number
    disabled?: boolean
    linear?: boolean
    onStepChange?: (details: StepperStepChangeDetails) => void
    onStepInvalid?: (details: StepperStepInvalidDetails) => void
    orientation?: StepperOrientation
    step?: number
  }
</script>

<script lang="ts">
  const clampStep = (value: number, count: number): number => {
    const lastStep = Math.max(0, Math.trunc(count) - 1)
    const nextStep = Number.isFinite(value) ? Math.trunc(value) : 0

    return Math.min(lastStep, Math.max(0, nextStep))
  }

  let {
    id,
    count = 0,
    defaultStep = 0,
    step = $bindable(defaultStep),
    orientation = "horizontal",
    linear = false,
    disabled = false,
    variant,
    onStepChange,
    onStepInvalid,
    class: className,
    children,
    ...restProps
  }: Props = $props()

  const currentStep = $derived(clampStep(step, count))

  $effect(() => {
    const nextStep = clampStep(step, count)

    if (step !== nextStep) {
      step = nextStep
    }
  })

  const getStepState = (index: number): StepperStepState => {
    if (index < currentStep) return "complete"
    if (index === currentStep) return "current"
    return "incomplete"
  }

  const setStep = (nextStep: number): void => {
    const boundedStep = clampStep(nextStep, count)
    const previousStep = currentStep

    if (disabled || boundedStep === previousStep) return

    if (linear && boundedStep > previousStep + 1) {
      onStepInvalid?.({ step: boundedStep, currentStep: previousStep })
      return
    }

    step = boundedStep
    onStepChange?.({ step: boundedStep, previousStep })
  }

  setStepperContext({
    count: () => count,
    disabled: () => disabled,
    getStepState,
    id: () => id ?? undefined,
    linear: () => linear,
    orientation: () => orientation,
    setStep,
    step: () => currentStep,
  })
</script>

<div
  {...restProps}
  {id}
  data-step={currentStep}
  data-orientation={orientation}
  data-disabled={disabled ? "" : undefined}
  data-variant={variant ?? "default"}
  class={variants({ variant, class: className })}
>
  {@render children?.()}
</div>
