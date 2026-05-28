<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";

  import { Button } from "../index.ts"

  const { Story } = defineMeta({
    title: "Button",
    component: Button.Root,
    render: template,
    args: {
      children: "Button",
      intent: "primary",
      size: "md",
    },
    argTypes: {
      intent: {
        control: "select",
        options: ["primary", "secondary", "destructive", "link"],
      },
      size: {
        control: "select",
        options: ["sm", "md", "lg", "square", "fit"],
      },
      children: {
        control: "text",
      },
    },
  })

  type ButtonStoryArgs = {
    children: string
    intent?: "primary" | "secondary" | "destructive" | "link"
    size?: "sm" | "md" | "lg" | "square" | "fit"
    disabled?: boolean
  }
</script>

{#snippet template({ children, ...args }: ButtonStoryArgs)}
  <Button.Root {...args}>{children}</Button.Root>
{/snippet}

<Story name="Primary" args={{ children: "Primary", intent: "primary" }} />
<Story name="Secondary" args={{ children: "Secondary", intent: "secondary" }} />
<Story name="Destructive" args={{ children: "Delete", intent: "destructive" }} />
<Story name="Link" args={{ children: "Read more", intent: "link", size: "fit" }} />

<Story name="Sizes" asChild>
  <div class="flex flex-wrap items-center gap-4">
    <Button.Root size="sm">Small</Button.Root>
    <Button.Root size="md">Medium</Button.Root>
    <Button.Root size="lg">Large</Button.Root>
    <Button.Root size="square" aria-label="Add">+</Button.Root>
    <Button.Root size="fit">Fit content</Button.Root>
  </div>
</Story>

<Story name="Intents" asChild>
  <div class="flex flex-wrap items-center gap-4">
    <Button.Root intent="primary">Primary</Button.Root>
    <Button.Root intent="secondary">Secondary</Button.Root>
    <Button.Root intent="destructive">Destructive</Button.Root>
    <Button.Root intent="link" size="fit">Link</Button.Root>
  </div>
</Story>

<Story name="Disabled" asChild>
  <div class="flex flex-wrap items-center gap-4">
    <Button.Root disabled>Primary</Button.Root>
    <Button.Root intent="secondary" disabled>Secondary</Button.Root>
    <Button.Root intent="destructive" disabled>Destructive</Button.Root>
  </div>
</Story>
