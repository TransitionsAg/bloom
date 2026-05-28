import NextButton from "./pagination-next-button.svelte"
import Page from "./pagination-page.svelte"
import Pages from "./pagination-pages.svelte"
import PrevButton from "./pagination-prev-button.svelte"
import Root from "./pagination-root.svelte"

const Pagination = Object.assign(Root, {
  Root,
  PrevButton,
  NextButton,
  Page,
  Pages,
})

export {
  Pagination,
  NextButton,
  Page,
  PrevButton,
  Root,
  Pages,
}
