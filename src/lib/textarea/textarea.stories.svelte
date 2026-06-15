<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Textarea } from "../index.ts"

  const { Story } = defineMeta({
    title: "Textarea",
    component: Textarea.Root,
    render: template,
    args: {
      placeholder: "Enter a message",
      rows: 4,
    },
    argTypes: {
      placeholder: {
        control: "text",
      },
      rows: {
        control: "number",
      },
    },
  })

  type TextareaStoryArgs = {
    placeholder?: string
    rows?: number
    value?: string
    disabled?: boolean
  }
</script>

{#snippet template(args: TextareaStoryArgs)}
  <Textarea.Root {...args} class="max-w-sm" />
{/snippet}

<Story name="Default" args={{ placeholder: "Tell us what you think" }} />
<Story name="With Value" args={{ value: "Regenerative transitions start in the soil." }} />
<Story name="Disabled" args={{ value: "Disabled textarea", disabled: true }} />
<Story name="Invalid" asChild>
  <Textarea.Root value="Too short" aria-invalid="true" class="max-w-sm" />
</Story>
