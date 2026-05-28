import Arrow from "./tooltip-arrow.svelte"
import Content from "./tooltip-content.svelte"
import ContentStatic from "./tooltip-content-static.svelte"
import Portal from "./tooltip-portal.svelte"
import Provider from "./tooltip-provider.svelte"
import Root from "./tooltip-root.svelte"
import Trigger from "./tooltip-trigger.svelte"

const Tooltip = Object.assign(Root, {
  Root,
  Arrow,
  Content,
  ContentStatic,
  Trigger,
  Provider,
  Portal,
})

export {
  Arrow,
  Content,
  ContentStatic,
  Portal,
  Provider,
  Root,
  Tooltip,
  Trigger,
}
