import Input from "./time-field-input.svelte"
import Label from "./time-field-label.svelte"
import Root from "./time-field-root.svelte"
import Segment from "./time-field-segment.svelte"

const TimeField = Object.assign(Root, {
  Root,
  Input,
  Label,
  Segment,
})

export { TimeField, Input, Label, Root, Segment }
