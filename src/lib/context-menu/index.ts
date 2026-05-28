import Arrow from "./context-menu-arrow.svelte"
import CheckboxGroup from "./context-menu-checkbox-group.svelte"
import CheckboxItem from "./context-menu-checkbox-item.svelte"
import Content from "./context-menu-content.svelte"
import ContentStatic from "./context-menu-content-static.svelte"
import Group from "./context-menu-group.svelte"
import GroupHeading from "./context-menu-group-heading.svelte"
import Item from "./context-menu-item.svelte"
import Portal from "./context-menu-portal.svelte"
import RadioGroup from "./context-menu-radio-group.svelte"
import RadioItem from "./context-menu-radio-item.svelte"
import Root from "./context-menu-root.svelte"
import Separator from "./context-menu-separator.svelte"
import Sub from "./context-menu-sub.svelte"
import SubContent from "./context-menu-sub-content.svelte"
import SubContentStatic from "./context-menu-sub-content-static.svelte"
import SubTrigger from "./context-menu-sub-trigger.svelte"
import Trigger from "./context-menu-trigger.svelte"

const ContextMenu = Object.assign(Root, {
  Root,
  Sub,
  Item,
  Group,
  GroupHeading,
  Arrow,
  Content,
  ContentStatic,
  Trigger,
  RadioItem,
  Separator,
  RadioGroup,
  SubContent,
  SubContentStatic,
  SubTrigger,
  CheckboxItem,
  Portal,
  CheckboxGroup,
})

export {
  Arrow,
  CheckboxGroup,
  CheckboxItem,
  Content,
  ContentStatic,
  ContextMenu,
  Group,
  GroupHeading,
  Item,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubContentStatic,
  SubTrigger,
  Trigger,
}
