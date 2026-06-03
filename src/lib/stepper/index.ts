import Content from "./stepper-content.svelte"
import Indicator from "./stepper-indicator.svelte"
import ItemRoot from "./stepper-item.svelte"
import List from "./stepper-list.svelte"
import Progress from "./stepper-progress.svelte"
import Root from "./stepper-root.svelte"
import Separator from "./stepper-separator.svelte"
import TriggerRoot from "./stepper-trigger.svelte"
import TriggerNext from "./stepper-trigger-next.svelte"
import TriggerPrev from "./stepper-trigger-prev.svelte"

const Trigger = Object.assign(TriggerRoot, {
  Root: TriggerRoot,
  Prev: TriggerPrev,
  Next: TriggerNext,
})

const Item = Object.assign(ItemRoot, {
  Root: ItemRoot,
  Trigger: TriggerRoot,
  Indicator,
  Separator,
})

const Stepper = Object.assign(Root, {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Progress,
})

export {
  Stepper,
  Content,
  Indicator,
  Item,
  ItemRoot,
  List,
  Progress,
  Root,
  Separator,
  Trigger,
  TriggerNext,
  TriggerPrev,
  TriggerRoot,
}

export type {
  StepperOrientation,
  StepperStepChangeDetails,
  StepperStepInvalidDetails,
  StepperStepState,
} from "./stepper-context.js"
