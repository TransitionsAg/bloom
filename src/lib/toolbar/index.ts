import Root from "./toolbar-root.svelte";
import Button from "./toolbar-button.svelte";
import Link from "./toolbar-link.svelte";
import Group from "./toolbar-group.svelte";
import GroupItem from "./toolbar-group-item.svelte";

const Toolbar = Object.assign(Root, {
	Root,
	Button,
	Link,
	Group,
	GroupItem,
});

export { Toolbar, Root, Button, Link, Group, GroupItem };
