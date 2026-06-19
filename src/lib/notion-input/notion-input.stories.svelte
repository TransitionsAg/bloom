<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { NotionInput } from "../index.ts"

  const { Story } = defineMeta({
    title: "NotionInput",
    component: NotionInput.Root,
    render: template,
    args: {
      placeholder: "Type '/' for commands…",
    },
    argTypes: {
      placeholder: {
        control: "text",
      },
      editable: {
        control: "boolean",
      },
    },
  })

  type NotionInputStoryArgs = {
    placeholder?: string
    value?: string
    editable?: boolean
  }
</script>

{#snippet template(args: NotionInputStoryArgs)}
  <NotionInput.Root {...args} class="max-w-2xl" />
{/snippet}

<Story name="Default" args={{ placeholder: "Type '/' for commands…" }} />
<Story
  name="With Value"
  args={{
    value:
      "<h1>Regenerative transitions</h1><p>Hover a block to reveal the <strong>+</strong> handle, or type <strong>/</strong> to insert a new element.</p><ul><li>Healthy ecosystems</li><li>Resilient communities</li></ul>",
  }}
/>
<Story
  name="Read Only"
  args={{
    editable: false,
    value: "<h2>A read only document</h2><p>The add handle and slash menu stay hidden.</p>",
  }}
/>
