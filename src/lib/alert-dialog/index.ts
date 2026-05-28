import Action from "./alert-dialog-action.svelte"
import Cancel from "./alert-dialog-cancel.svelte"
import Content from "./alert-dialog-content.svelte"
import Description from "./alert-dialog-description.svelte"
import Overlay from "./alert-dialog-overlay.svelte"
import Portal from "./alert-dialog-portal.svelte"
import Root from "./alert-dialog-root.svelte"
import Title from "./alert-dialog-title.svelte"
import Trigger from "./alert-dialog-trigger.svelte"

const AlertDialog = Object.assign(Root, {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Action,
  Cancel,
})

export {
  Action,
  AlertDialog,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
}
