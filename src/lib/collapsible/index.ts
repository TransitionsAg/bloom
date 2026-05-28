import Content from "./collapsible-content.svelte"
import Root from "./collapsible-root.svelte"
import Trigger from "./collapsible-trigger.svelte"

const Collapsible = Object.assign(Root, {
  Root,
  Content,
  Trigger,
})

export { Collapsible, Content, Root, Trigger }
