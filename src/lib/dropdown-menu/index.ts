import Arrow from "./dropdown-menu-arrow.svelte"
import CheckboxGroup from "./dropdown-menu-checkbox-group.svelte"
import CheckboxItem from "./dropdown-menu-checkbox-item.svelte"
import Content from "./dropdown-menu-content.svelte"
import ContentStatic from "./dropdown-menu-content-static.svelte"
import Group from "./dropdown-menu-group.svelte"
import GroupHeading from "./dropdown-menu-group-heading.svelte"
import Item from "./dropdown-menu-item.svelte"
import Portal from "./dropdown-menu-portal.svelte"
import RadioGroup from "./dropdown-menu-radio-group.svelte"
import RadioItem from "./dropdown-menu-radio-item.svelte"
import Root from "./dropdown-menu-root.svelte"
import Separator from "./dropdown-menu-separator.svelte"
import Sub from "./dropdown-menu-sub.svelte"
import SubContent from "./dropdown-menu-sub-content.svelte"
import SubContentStatic from "./dropdown-menu-sub-content-static.svelte"
import SubTrigger from "./dropdown-menu-sub-trigger.svelte"
import Trigger from "./dropdown-menu-trigger.svelte"

const DropdownMenu = Object.assign(Root, {
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
  DropdownMenu,
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
