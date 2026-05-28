import Root from "./rating-group-root.svelte";
import Item from "./rating-group-item.svelte";

const RatingGroup = Object.assign(Root, {
	Root,
	Item,
});

export { RatingGroup, Root, Item };
