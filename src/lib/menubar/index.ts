import Arrow from "./menubar-arrow.svelte"
import CheckboxGroup from "./menubar-checkbox-group.svelte"
import CheckboxItem from "./menubar-checkbox-item.svelte"
import Content from "./menubar-content.svelte"
import ContentStatic from "./menubar-content-static.svelte"
import Group from "./menubar-group.svelte"
import GroupHeading from "./menubar-group-heading.svelte"
import Item from "./menubar-item.svelte"
import Menu from "./menubar-menu.svelte"
import Portal from "./menubar-portal.svelte"
import RadioGroup from "./menubar-radio-group.svelte"
import RadioItem from "./menubar-radio-item.svelte"
import Root from "./menubar-root.svelte"
import Separator from "./menubar-separator.svelte"
import Sub from "./menubar-sub.svelte"
import SubContent from "./menubar-sub-content.svelte"
import SubContentStatic from "./menubar-sub-content-static.svelte"
import SubTrigger from "./menubar-sub-trigger.svelte"
import Trigger from "./menubar-trigger.svelte"

const Menubar = Object.assign(Root, {
  Root,
  Menu,
  Content,
  ContentStatic,
  Trigger,
  Sub,
  Item,
  Group,
  GroupHeading,
  Arrow,
  RadioItem,
  Separator,
  SubContent,
  SubContentStatic,
  SubTrigger,
  RadioGroup,
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
  Group,
  GroupHeading,
  Item,
  Menubar,
  Menu,
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
