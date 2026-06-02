<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Button, Card, Input } from "../index.ts"

  const { Story } = defineMeta({
    title: "Card",
    component: Card.Root,
  })
</script>

<Story name="Default" asChild>
  <Card.Root class="max-w-sm">
    <Card.Header>
      <Card.Title>Project settings</Card.Title>
      <Card.Description>Manage the public details for this workspace.</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-3">
        <Input.Root value="Bloom" aria-label="Project name" />
        <Input.Root value="Design system components" aria-label="Project description" />
      </div>
    </Card.Content>
    <Card.Footer>
      <Button.Root>Save</Button.Root>
      <Button.Root intent="secondary">Cancel</Button.Root>
    </Card.Footer>
  </Card.Root>
</Story>

<Story name="Content Only" asChild>
  <Card.Root class="max-w-sm">
    <p class="text-sm font-medium text-muted-foreground">
      Cards are plain div wrappers with Bloom surface, spacing, and containment styles.
    </p>
  </Card.Root>
</Story>

<Story name="Sizes" asChild>
  <div class="grid max-w-4xl gap-4 md:grid-cols-3">
    <Card.Root size="sm">
      <Card.Header>
        <Card.Title>Small card</Card.Title>
        <Card.Description>Compact title, description, and body text.</Card.Description>
      </Card.Header>
      <Card.Content>Useful for dense summaries or narrow sidebars.</Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>Normal card</Card.Title>
        <Card.Description>Default title, description, and body text.</Card.Description>
      </Card.Header>
      <Card.Content>Works well for standard page content.</Card.Content>
    </Card.Root>

    <Card.Root size="lg">
      <Card.Header>
        <Card.Title>Large card</Card.Title>
        <Card.Description>Roomier title, description, and body text.</Card.Description>
      </Card.Header>
      <Card.Content>Useful for feature panels or marketing content.</Card.Content>
    </Card.Root>
  </div>
</Story>

<Story name="Padding" asChild>
  <div class="grid max-w-4xl gap-4 md:grid-cols-4">
    <Card.Root padding="none" class="p-3">
      <Card.Header>
        <Card.Title>None</Card.Title>
        <Card.Description>Manual padding.</Card.Description>
      </Card.Header>
    </Card.Root>

    <Card.Root padding="sm">
      <Card.Header>
        <Card.Title>Small</Card.Title>
        <Card.Description>Compact padding.</Card.Description>
      </Card.Header>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>Normal</Card.Title>
        <Card.Description>Default padding.</Card.Description>
      </Card.Header>
    </Card.Root>

    <Card.Root padding="lg">
      <Card.Header>
        <Card.Title>Large</Card.Title>
        <Card.Description>Roomy padding.</Card.Description>
      </Card.Header>
    </Card.Root>
  </div>
</Story>
