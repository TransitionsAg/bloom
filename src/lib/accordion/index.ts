import Content from "./accordion-content.svelte"
import Header from "./accordion-header.svelte"
import Item from "./accordion-item.svelte"
import Root from "./accordion-root.svelte"
import Trigger from "./accordion-trigger.svelte"

const Accordion = Object.assign(Root, {
  Root,
  Item,
  Header,
  Trigger,
  Content,
})

export {
  Accordion,
  Content,
  Header,
  Item,
  Root,
  Trigger,
}
