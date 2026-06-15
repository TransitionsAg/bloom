import Button from "./navigation-menu-button.svelte"
import Content from "./navigation-menu-content.svelte"
import Indicator from "./navigation-menu-indicator.svelte"
import Item from "./navigation-menu-item.svelte"
import Link from "./navigation-menu-link.svelte"
import List from "./navigation-menu-list.svelte"
import Root from "./navigation-menu-root.svelte"
import Sub from "./navigation-menu-sub.svelte"
import Trigger from "./navigation-menu-trigger.svelte"
import Viewport from "./navigation-menu-viewport.svelte"

const NavigationMenu = Object.assign(Root, {
  Root,
  Button,
  Content,
  Indicator,
  Item,
  Link,
  List,
  Sub,
  Trigger,
  Viewport,
})

export {
  NavigationMenu,
  Button,
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Sub,
  Trigger,
  Viewport,
}
