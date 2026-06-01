<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Input } from "../index.ts"

  const { Story } = defineMeta({
    title: "Input",
    component: Input.Root,
    render: template,
    args: {
      placeholder: "Enter a value",
      type: "text",
    },
    argTypes: {
      placeholder: {
        control: "text",
      },
      type: {
        control: "select",
        options: ["text", "email", "password", "number", "search", "url", "tel"],
      },
    },
  })

  type InputStoryArgs = {
    placeholder?: string
    type?: string
    value?: string
    disabled?: boolean
  }
</script>

{#snippet template(args: InputStoryArgs)}
  <Input.Root {...args} class="max-w-sm" />
{/snippet}

<Story name="Default" args={{ placeholder: "Email address", type: "email" }} />
<Story name="With Value" args={{ value: "hello@transitions.ag", type: "email" }} />
<Story name="Disabled" args={{ value: "Disabled input", disabled: true }} />
<Story name="Invalid" asChild>
  <Input.Root value="not-an-email" aria-invalid="true" class="max-w-sm" />
</Story>
