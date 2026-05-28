import Arrow from "./popover-arrow.svelte"
import Close from "./popover-close.svelte"
import Content from "./popover-content.svelte"
import ContentStatic from "./popover-content-static.svelte"
import Overlay from "./popover-overlay.svelte"
import Portal from "./popover-portal.svelte"
import Root from "./popover-root.svelte"
import Trigger from "./popover-trigger.svelte"

const Popover = Object.assign(Root, {
  Root,
  Arrow,
  Content,
  ContentStatic,
  Trigger,
  Close,
  Portal,
  Overlay,
})

export {
  Arrow,
  Close,
  Content,
  ContentStatic,
  Overlay,
  Popover,
  Portal,
  Root,
  Trigger,
}
