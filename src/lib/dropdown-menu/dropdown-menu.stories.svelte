<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Button, DropdownMenu } from "../index.ts"

  const { Story } = defineMeta({
    title: "Dropdown Menu",
    component: DropdownMenu.Root,
  })
</script>

<script lang="ts">
  let checkedTools = $state(["grid", "rulers"])
  let selectedLayout = $state("timeline")

  const layouts = [
    { value: "timeline", label: "Timeline" },
    { value: "board", label: "Board" },
    { value: "calendar", label: "Calendar" },
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
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
  <div class="flex h-48 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">Open menu</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6} class="w-48">
          <DropdownMenu.Item>New transition</DropdownMenu.Item>
          <DropdownMenu.Item>Open workspace</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Import legacy plan</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Keyboard shortcuts</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>About</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>

<Story name="WithArrow" asChild>
  <div class="flex h-52 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">With arrow</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={10} class="w-48">
          <DropdownMenu.Arrow />
          <DropdownMenu.Item>New transition</DropdownMenu.Item>
          <DropdownMenu.Item>Open workspace</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Import legacy plan</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>About</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>

<Story name="Groups" asChild>
  <div class="flex h-72 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">Actions</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6} class="w-56">
          <DropdownMenu.Group>
            <DropdownMenu.GroupHeading>Workspace</DropdownMenu.GroupHeading>
            <DropdownMenu.Item>New transition</DropdownMenu.Item>
            <DropdownMenu.Item>Open workspace</DropdownMenu.Item>
            <DropdownMenu.Item>Share</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.GroupHeading>Account</DropdownMenu.GroupHeading>
            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Item>Billing</DropdownMenu.Item>
            <DropdownMenu.Item disabled>Team settings</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Log out</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>

<Story name="SubMenu" asChild>
  <div class="flex h-48 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">Export</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6} class="w-48">
          <DropdownMenu.Item>New project</DropdownMenu.Item>
          <DropdownMenu.Item>Open</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              Export as
              {@render ChevronRight()}
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent sideOffset={8}>
              <DropdownMenu.Item>PDF summary</DropdownMenu.Item>
              <DropdownMenu.Item>CSV milestones</DropdownMenu.Item>
              <DropdownMenu.Item>JSON archive</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>

<Story name="Checkboxes" asChild>
  <div class="flex h-60 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">View</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6} class="w-48">
          <DropdownMenu.CheckboxGroup value={checkedTools}>
            <DropdownMenu.GroupHeading>Tools</DropdownMenu.GroupHeading>
            <DropdownMenu.CheckboxItem value="grid">
              {#snippet children({ checked })}
                Show grid
                {#if checked}
                  {@render Checkmark()}
                {/if}
              {/snippet}
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem value="rulers">
              {#snippet children({ checked })}
                Show rulers
                {#if checked}
                  {@render Checkmark()}
                {/if}
              {/snippet}
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem value="snap">
              {#snippet children({ checked })}
                Snap to grid
                {#if checked}
                  {@render Checkmark()}
                {/if}
              {/snippet}
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.CheckboxGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Reset to defaults</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>

<Story name="Radio" asChild>
  <div class="flex h-60 items-start justify-center p-8">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button.Root intent="secondary">Layout</Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6} class="w-48">
          <DropdownMenu.RadioGroup value={selectedLayout}>
            <DropdownMenu.GroupHeading>Layout</DropdownMenu.GroupHeading>
            {#each layouts as layout (layout.value)}
              <DropdownMenu.RadioItem value={layout.value}>
                {#snippet children({ checked })}
                  {layout.label}
                  {#if checked}
                    {@render Dot()}
                  {/if}
                {/snippet}
              </DropdownMenu.RadioItem>
            {/each}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
</Story>
