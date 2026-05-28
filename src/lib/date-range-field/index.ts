import Input from "./date-range-field-input.svelte"
import Label from "./date-range-field-label.svelte"
import Root from "./date-range-field-root.svelte"
import Segment from "./date-range-field-segment.svelte"

const DateRangeField = Object.assign(Root, {
  Root,
  Input,
  Label,
  Segment,
})

export { DateRangeField, Input, Label, Root, Segment }
