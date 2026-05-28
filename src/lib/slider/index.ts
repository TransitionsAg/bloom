import Root from "./slider-root.svelte";
import Range from "./slider-range.svelte";
import Thumb from "./slider-thumb.svelte";
import Tick from "./slider-tick.svelte";
import TickLabel from "./slider-tick-label.svelte";
import ThumbLabel from "./slider-thumb-label.svelte";

const Slider = Object.assign(Root, {
	Root,
	Range,
	Thumb,
	Tick,
	TickLabel,
	ThumbLabel,
});

export { Slider, Root, Range, Thumb, Tick, TickLabel, ThumbLabel };
