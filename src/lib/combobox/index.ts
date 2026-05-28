import Arrow from "./combobox-arrow.svelte"
import Content from "./combobox-content.svelte"
import ContentStatic from "./combobox-content-static.svelte"
import Group from "./combobox-group.svelte"
import GroupHeading from "./combobox-group-heading.svelte"
import Input from "./combobox-input.svelte"
import Item from "./combobox-item.svelte"
import Portal from "./combobox-portal.svelte"
import Root from "./combobox-root.svelte"
import ScrollDownButton from "./combobox-scroll-down-button.svelte"
import ScrollUpButton from "./combobox-scroll-up-button.svelte"
import Separator from "./combobox-separator.svelte"
import Trigger from "./combobox-trigger.svelte"
import Viewport from "./combobox-viewport.svelte"

const Combobox = Object.assign(Root, {
  Root,
  Input,
  Separator,
  Arrow,
  Trigger,
  Portal,
  Content,
  ContentStatic,
  Item,
  Group,
  GroupHeading,
  Viewport,
  ScrollDownButton,
  ScrollUpButton,
})

export {
  Arrow,
  Combobox,
  Content,
  ContentStatic,
  Group,
  GroupHeading,
  Input,
  Item,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Viewport,
}
