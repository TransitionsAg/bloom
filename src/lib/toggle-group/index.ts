import Item from "./toggle-group-item.svelte"
import Root from "./toggle-group-root.svelte"

const ToggleGroup = Object.assign(Root, {
  Root,
  Item,
})

export { ToggleGroup, Item, Root }
