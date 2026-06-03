import { getContext, setContext } from "svelte"

export type StepperOrientation = "horizontal" | "vertical"
export type StepperStepState = "complete" | "current" | "incomplete"

export type StepperStepChangeDetails = {
  step: number
  previousStep: number
}

export type StepperStepInvalidDetails = {
  step: number
  currentStep: number
}

export type StepperContext = {
  count: () => number
  disabled: () => boolean
  getStepState: (index: number) => StepperStepState
  id: () => string | undefined
  linear: () => boolean
  orientation: () => StepperOrientation
  setStep: (step: number) => void
  step: () => number
}

export type StepperItemContext = {
  disabled: () => boolean
  index: () => number
}

const stepperContextKey = Symbol("bloom-stepper")
const stepperItemContextKey = Symbol("bloom-stepper-item")

export function setStepperContext(context: StepperContext): StepperContext {
  setContext(stepperContextKey, context)
  return context
}

export function getStepperContext(component = "Stepper"): StepperContext {
  const context = getContext<StepperContext | undefined>(stepperContextKey)

  if (!context) {
    throw new Error(`${component} must be used inside Stepper.Root`)
  }

  return context
}

export function setStepperItemContext(context: StepperItemContext): StepperItemContext {
  setContext(stepperItemContextKey, context)
  return context
}

export function getStepperItemContext(component = "Stepper item part"): StepperItemContext {
  const context = getContext<StepperItemContext | undefined>(stepperItemContextKey)

  if (!context) {
    throw new Error(`${component} must be used inside Stepper.Item`)
  }

  return context
}

export function getOptionalStepperItemContext(): StepperItemContext | undefined {
  return getContext<StepperItemContext | undefined>(stepperItemContextKey)
}
