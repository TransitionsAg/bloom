import Root from "./avatar-root.svelte";
import Image from "./avatar-image.svelte";
import Fallback from "./avatar-fallback.svelte";

const Avatar = Object.assign(Root, {
	Root,
	Image,
	Fallback,
});

export { Avatar, Root, Image, Fallback };
