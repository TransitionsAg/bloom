import Root from "./time-range-field-root.svelte";
import Input from "./time-range-field-input.svelte";
import Label from "./time-range-field-label.svelte";
import Segment from "./time-range-field-segment.svelte";

const TimeRangeField = Object.assign(Root, {
	Root,
	Input,
	Label,
	Segment,
});

export { TimeRangeField, Root, Input, Label, Segment };
