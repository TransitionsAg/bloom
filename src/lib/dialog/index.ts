import Close from "./dialog-close.svelte"
import Content from "./dialog-content.svelte"
import Description from "./dialog-description.svelte"
import Overlay from "./dialog-overlay.svelte"
import Portal from "./dialog-portal.svelte"
import Root from "./dialog-root.svelte"
import Title from "./dialog-title.svelte"
import Trigger from "./dialog-trigger.svelte"

const Dialog = Object.assign(Root, {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
})

export {
  Close,
  Content,
  Description,
  Dialog,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
}
