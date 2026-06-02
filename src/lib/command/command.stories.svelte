<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Command } from "../index.ts"

  const suggestions = [
    {
      value: "open-board",
      label: "Open board",
      detail: "Projects",
      keywords: ["workspace", "project", "kanban"],
      shortcut: "B",
    },
    {
      value: "new-note",
      label: "New note",
      detail: "Capture",
      keywords: ["write", "document", "draft"],
      shortcut: "N",
    },
    {
      value: "invite-member",
      label: "Invite member",
      detail: "Team",
      keywords: ["person", "user", "email"],
      shortcut: "I",
    },
  ]

  const records = [
    {
      value: "transition-plan",
      label: "Transition plan",
      detail: "Updated today",
      keywords: ["roadmap", "strategy"],
    },
    {
      value: "carbon-budget",
      label: "Carbon budget",
      detail: "Finance",
      keywords: ["report", "emissions"],
    },
    {
      value: "supplier-map",
      label: "Supplier map",
      detail: "Operations",
      keywords: ["network", "partners"],
    },
  ]

  const { Story } = defineMeta({
    title: "Command",
    component: Command.Root,
  })
</script>

<Story name="Default" asChild>
  <div class="flex w-full max-w-xl flex-col gap-3">
    <div class="flex items-end justify-between gap-4">
      <div>
        <p class="typo-sm text-foreground">Command palette</p>
        <p class="text-sm font-medium text-muted-foreground">Search actions, records, and links.</p>
      </div>
      <kbd class="rounded border border-border bg-background px-2 py-1 text-xs font-medium text-caption">Ctrl K</kbd>
    </div>

    <Command.Root value="open-board">
      <Command.Input placeholder="Search commands..." />
      <Command.List>
        <Command.Viewport>
          <Command.Empty>No matching command found.</Command.Empty>

          <Command.Group>
            <Command.GroupHeading>Suggestions</Command.GroupHeading>
            <Command.GroupItems>
              {#each suggestions as item (item.value)}
                <Command.Item value={item.value} keywords={item.keywords}>
                  <span class="flex size-7 items-center justify-center rounded bg-muted typo-xs text-foreground">
                    {item.shortcut}
                  </span>
                  <span class="flex min-w-0 flex-1 flex-col">
                    <span class="truncate font-medium">{item.label}</span>
                    <span class="truncate text-xs font-medium text-muted-foreground">{item.detail}</span>
                  </span>
                </Command.Item>
              {/each}
            </Command.GroupItems>
          </Command.Group>

          <Command.Separator />

          <Command.Group>
            <Command.GroupHeading>Records</Command.GroupHeading>
            <Command.GroupItems>
              {#each records as item (item.value)}
                <Command.Item value={item.value} keywords={item.keywords}>
                  <span class="size-2 rounded bg-primary"></span>
                  <span class="flex min-w-0 flex-1 items-center justify-between gap-4">
                    <span class="truncate font-medium">{item.label}</span>
                    <span class="shrink-0 text-xs font-medium text-muted-foreground">{item.detail}</span>
                  </span>
                </Command.Item>
              {/each}
            </Command.GroupItems>
          </Command.Group>

          <Command.Separator />

          <Command.Group>
            <Command.GroupHeading>Links</Command.GroupHeading>
            <Command.GroupItems>
              <Command.LinkItem href="#docs" value="docs" keywords={["help", "reference"]}>
                <span class="size-2 rounded bg-secondary"></span>
                <span class="flex flex-1 items-center justify-between gap-4">
                  <span class="font-medium">Open documentation</span>
                  <span class="text-xs font-medium text-muted-foreground">Link</span>
                </span>
              </Command.LinkItem>
              <Command.Item value="archive" disabled>
                <span class="size-2 rounded bg-disabled"></span>
                <span class="flex flex-1 items-center justify-between gap-4">
                  <span class="font-medium">Archive workspace</span>
                  <span class="text-xs font-medium text-muted-foreground">Disabled</span>
                </span>
              </Command.Item>
            </Command.GroupItems>
          </Command.Group>
        </Command.Viewport>
      </Command.List>
    </Command.Root>
  </div>
</Story>
