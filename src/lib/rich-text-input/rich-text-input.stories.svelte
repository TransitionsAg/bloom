<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { RichTextInput } from "../index.ts"

  const { Story } = defineMeta({
    title: "RichTextInput",
    component: RichTextInput.Root,
    render: template,
    args: {
      placeholder: "Write something…",
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

  type RichTextInputStoryArgs = {
    placeholder?: string
    value?: string
    editable?: boolean
  }
</script>

{#snippet template(args: RichTextInputStoryArgs)}
  <RichTextInput.Root {...args} class="max-w-xl" />
{/snippet}

<Story name="Default" args={{ placeholder: "Select some text to format it" }} />
<Story
  name="With Value"
  args={{
    value:
      "<h2>Regenerative transitions</h2><p>They start in the <strong>soil</strong> and grow from there. Highlight any text to reveal the formatting toolbar.</p><ul><li>Healthy ecosystems</li><li>Resilient communities</li></ul>",
  }}
/>
<Story
  name="Read Only"
  args={{
    editable: false,
    value: "<p>This content is <em>read only</em> — the toolbar stays hidden.</p>",
  }}
/>
