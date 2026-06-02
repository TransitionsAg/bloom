<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Label } from "../index.ts"

  const { Story } = defineMeta({
    title: "Label",
    component: Label.Root,
    render: template,
    args: {
      children: "Email address",
      for: "story-label-input",
    },
    argTypes: {
      children: {
        control: "text",
      },
      for: {
        control: "text",
      },
    },
  })

  type LabelStoryArgs = {
    children: string
    for?: string
  }
</script>

{#snippet template({ children, ...args }: LabelStoryArgs)}
  <Label.Root {...args}>{children}</Label.Root>
{/snippet}

<Story name="Default" args={{ children: "Email address" }} />

<Story name="With Input" asChild>
  <div class="flex w-full max-w-sm flex-col gap-2">
    <Label.Root for="email">Email address</Label.Root>
    <input
      id="email"
      type="email"
      placeholder="name@example.com"
      class="h-12 rounded border-2 border-border bg-field px-4 text-sm font-medium text-foreground placeholder:text-caption transition-all hover:bg-field-accent focus-visible:border-primary focus-visible:outline-none"
    />
  </div>
</Story>

<Story name="Peer Disabled" asChild>
  <div class="flex items-center gap-3">
    <input id="updates" type="checkbox" class="peer size-5" disabled />
    <Label.Root for="updates">Send product updates</Label.Root>
  </div>
</Story>

<Story name="Custom Class" asChild>
  <Label.Root for="company" class="text-lg font-semibold tracking-[-0.02em]">Company name</Label.Root>
</Story>
