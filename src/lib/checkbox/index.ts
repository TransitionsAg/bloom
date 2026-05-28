import Group from "./checkbox-group.svelte"
import GroupLabel from "./checkbox-group-label.svelte"
import Root from "./checkbox-root.svelte"

const Checkbox = Object.assign(Root, {
  Root,
  Group,
  GroupLabel,
})

export { Checkbox, Group, GroupLabel, Root }
