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
    <p class="text-sm text-muted-foreground">
      Cards are plain div wrappers with Bloom surface, spacing, and containment styles.
    </p>
  </Card.Root>
</Story>
