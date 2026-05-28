import Content from "./select-content.svelte"
import ContentStatic from "./select-content-static.svelte"
import Group from "./select-group.svelte"
import GroupHeading from "./select-group-heading.svelte"
import Item from "./select-item.svelte"
import Portal from "./select-portal.svelte"
import Root from "./select-root.svelte"
import ScrollDownButton from "./select-scroll-down-button.svelte"
import ScrollUpButton from "./select-scroll-up-button.svelte"
import Trigger from "./select-trigger.svelte"
import Value from "./select-value.svelte"
import Viewport from "./select-viewport.svelte"

const Select = Object.assign(Root, {
  Root,
  Value,
  Content,
  ContentStatic,
  Item,
  Group,
  GroupHeading,
  Trigger,
  Portal,
  Viewport,
  ScrollUpButton,
  ScrollDownButton,
})

export {
  Content,
  ContentStatic,
  Group,
  GroupHeading,
  Item,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Select,
  Trigger,
  Value,
  Viewport,
}
