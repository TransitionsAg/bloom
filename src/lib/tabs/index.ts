import Content from "./tabs-content.svelte"
import List from "./tabs-list.svelte"
import Root from "./tabs-root.svelte"
import Trigger from "./tabs-trigger.svelte"

const Tabs = Object.assign(Root, {
  Root,
  Content,
  List,
  Trigger,
})

export { Tabs, Content, List, Root, Trigger }
