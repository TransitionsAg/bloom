import Content from "./card-content.svelte"
import Description from "./card-description.svelte"
import Footer from "./card-footer.svelte"
import Header from "./card-header.svelte"
import Root from "./card-root.svelte"
import Title from "./card-title.svelte"

const Card = Object.assign(Root, {
  Root,
  Header,
  Title,
  Description,
  Content,
  Footer,
})

export { Card, Content, Description, Footer, Header, Root, Title }
