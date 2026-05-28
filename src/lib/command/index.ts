import Empty from "./command-empty.svelte"
import Group from "./command-group.svelte"
import GroupHeading from "./command-group-heading.svelte"
import GroupItems from "./command-group-items.svelte"
import Input from "./command-input.svelte"
import Item from "./command-item.svelte"
import LinkItem from "./command-link-item.svelte"
import List from "./command-list.svelte"
import Loading from "./command-loading.svelte"
import Root from "./command-root.svelte"
import Separator from "./command-separator.svelte"
import Viewport from "./command-viewport.svelte"

const Command = Object.assign(Root, {
  Root,
  Empty,
  Group,
  GroupHeading,
  GroupItems,
  Input,
  Item,
  LinkItem,
  List,
  Viewport,
  Loading,
  Separator,
})

export {
  Command,
  Empty,
  Group,
  GroupHeading,
  GroupItems,
  Input,
  Item,
  LinkItem,
  List,
  Loading,
  Root,
  Separator,
  Viewport,
}
