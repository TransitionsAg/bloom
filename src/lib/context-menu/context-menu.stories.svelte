<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { ContextMenu } from "../index.ts"

  const { Story } = defineMeta({
    title: "ContextMenu",
    component: ContextMenu.Root,
  })
</script>

<script lang="ts">
  let selectedLayout = $state("list")
  let checkedTools = $state(["search", "filter"])

  const layouts = [
    { value: "list", label: "List view" },
    { value: "grid", label: "Grid view" },
    { value: "kanban", label: "Kanban view" },
  ]

  const toolOptions = [
    { value: "search", label: "Search" },
    { value: "filter", label: "Filter" },
    { value: "sort", label: "Sort" },
  ]
</script>

{#snippet Checkmark()}
  <svg class="ml-auto size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13.3 4.1 6.2 11.2 2.7 7.7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/snippet}

{#snippet ChevronRight()}
  <svg class="ml-auto size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="m6 3.5 4.5 4.5L6 12.5"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/snippet}

{#snippet Dot()}
  <svg class="ml-auto size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="3" fill="currentColor" />
  </svg>
{/snippet}

<Story name="Default" asChild>
  <ContextMenu.Root>
    <ContextMenu.Trigger
      class="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-border typo-caption"
    >
      Right-click here
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content>
        <ContextMenu.Item>New transition</ContextMenu.Item>
        <ContextMenu.Item>Open workspace</ContextMenu.Item>
        <ContextMenu.Item disabled>Import legacy plan</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Share workspace</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
</Story>

<Story name="WithRadioGroup" asChild>
  <ContextMenu.Root>
    <ContextMenu.Trigger
      class="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-border typo-caption"
    >
      Right-click for layout options
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content class="w-56">
        <ContextMenu.Group>
          <ContextMenu.GroupHeading>Layout</ContextMenu.GroupHeading>
          <ContextMenu.RadioGroup value={selectedLayout}>
            {#each layouts as layout (layout.value)}
              <ContextMenu.RadioItem value={layout.value}>
                {#snippet children({ checked })}
                  {layout.label}
                  {#if checked}
                    {@render Dot()}
                  {/if}
                {/snippet}
              </ContextMenu.RadioItem>
            {/each}
          </ContextMenu.RadioGroup>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
</Story>

<Story name="WithCheckboxGroup" asChild>
  <ContextMenu.Root>
    <ContextMenu.Trigger
      class="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-border typo-caption"
    >
      Right-click for tools
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content class="w-56">
        <ContextMenu.Group>
          <ContextMenu.GroupHeading>Tools</ContextMenu.GroupHeading>
          <ContextMenu.CheckboxGroup value={checkedTools}>
            {#each toolOptions as option (option.value)}
              <ContextMenu.CheckboxItem value={option.value}>
                {#snippet children({ checked })}
                  {option.label}
                  {#if checked}
                    {@render Checkmark()}
                  {/if}
                {/snippet}
              </ContextMenu.CheckboxItem>
            {/each}
          </ContextMenu.CheckboxGroup>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
</Story>

<Story name="WithSubMenu" asChild>
  <ContextMenu.Root>
    <ContextMenu.Trigger
      class="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-border typo-caption"
    >
      Right-click for nested menu
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content class="w-48">
        <ContextMenu.Item>New transition</ContextMenu.Item>
        <ContextMenu.Item>Open workspace</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>
            Export
            {@render ChevronRight()}
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent sideOffset={8}>
            <ContextMenu.Item>PDF summary</ContextMenu.Item>
            <ContextMenu.Item>CSV milestones</ContextMenu.Item>
            <ContextMenu.Item>JSON archive</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>
            Sharing
            {@render ChevronRight()}
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent sideOffset={8}>
            <ContextMenu.Item>Copy link</ContextMenu.Item>
            <ContextMenu.Item>Manage access</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
</Story>
