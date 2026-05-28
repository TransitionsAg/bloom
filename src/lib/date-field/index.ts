import Input from "./date-field-input.svelte"
import Label from "./date-field-label.svelte"
import Root from "./date-field-root.svelte"
import Segment from "./date-field-segment.svelte"

const DateField = Object.assign(Root, {
  Root,
  Input,
  Label,
  Segment,
})

export { DateField, Input, Label, Root, Segment }
