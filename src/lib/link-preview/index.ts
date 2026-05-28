import Arrow from "./link-preview-arrow.svelte"
import Content from "./link-preview-content.svelte"
import ContentStatic from "./link-preview-content-static.svelte"
import Portal from "./link-preview-portal.svelte"
import Root from "./link-preview-root.svelte"
import Trigger from "./link-preview-trigger.svelte"

const LinkPreview = Object.assign(Root, {
  Root,
  Arrow,
  Content,
  ContentStatic,
  Trigger,
  Portal,
})

export {
  Arrow,
  Content,
  ContentStatic,
  LinkPreview,
  Portal,
  Root,
  Trigger,
}
