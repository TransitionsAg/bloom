import Item from "./radio-group-item.svelte"
import Root from "./radio-group-root.svelte"

const RadioGroup = Object.assign(Root, {
  Root,
  Item,
})

export { RadioGroup, Item, Root }
