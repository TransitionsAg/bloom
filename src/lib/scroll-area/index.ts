import Corner from "./scroll-area-corner.svelte";
import Root from "./scroll-area-root.svelte";
import Scrollbar from "./scroll-area-scrollbar.svelte";
import Thumb from "./scroll-area-thumb.svelte";
import Viewport from "./scroll-area-viewport.svelte";

const ScrollArea = Object.assign(Root, {
	Root,
	Viewport,
	Scrollbar,
	Thumb,
	Corner,
});

export { ScrollArea, Root, Viewport, Scrollbar, Thumb, Corner };
