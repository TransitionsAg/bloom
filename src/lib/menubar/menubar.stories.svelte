<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"
  import { CaretRight, Check } from "phosphor-svelte"

  import { Menubar } from "../index.ts"

  const { Story } = defineMeta({
    title: "Menubar",
    component: Menubar.Root,
  })
</script>

<script lang="ts">
  let selectedView = $state("timeline")
  let selectedProfile = $state("april")
  let checkedTools = $state(["grid", "rulers"])

  const views = [
    { value: "timeline", label: "Timeline" },
    { value: "board", label: "Board" },
    { value: "calendar", label: "Calendar" },
  ]

  const profiles = [
    { value: "april", label: "April Green" },
    { value: "sam", label: "Sam Rivera" },
    { value: "lee", label: "Lee Martin" },
  ]
</script>

{#snippet Checkmark()}
  <Check class="ml-auto size-4 text-primary" weight="bold" />
{/snippet}

{#snippet ChevronRight()}
  <CaretRight class="ml-auto size-4" weight="bold" />
{/snippet}

<Story name="Default" asChild>
  <Menubar.Root>
    <Menubar.Menu value="file">
      <Menubar.Trigger>File</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content align="start" sideOffset={6}>
          <Menubar.Item>New transition</Menubar.Item>
          <Menubar.Item>Open workspace</Menubar.Item>
          <Menubar.Item disabled>Import legacy plan</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>
              Export
              {@render ChevronRight()}
            </Menubar.SubTrigger>
            <Menubar.SubContent sideOffset={8}>
              <Menubar.Item>PDF summary</Menubar.Item>
              <Menubar.Item>CSV milestones</Menubar.Item>
              <Menubar.Item>JSON archive</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>

    <Menubar.Menu value="view">
      <Menubar.Trigger>View</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content align="start" sideOffset={6} class="w-56">
          <Menubar.RadioGroup value={selectedView}>
            <Menubar.GroupHeading>Layout</Menubar.GroupHeading>
            {#each views as view (view.value)}
              <Menubar.RadioItem value={view.value}>
                {#snippet children({ checked })}
                  {view.label}
                  {#if checked}
                    {@render Checkmark()}
                  {/if}
                {/snippet}
              </Menubar.RadioItem>
            {/each}
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.CheckboxGroup value={checkedTools}>
            <Menubar.GroupHeading>Tools</Menubar.GroupHeading>
            <Menubar.CheckboxItem value="grid">
              {#snippet children({ checked })}
                Show grid
                {#if checked}
                  {@render Checkmark()}
                {/if}
              {/snippet}
            </Menubar.CheckboxItem>
            <Menubar.CheckboxItem value="rulers">
              {#snippet children({ checked })}
                Show rulers
                {#if checked}
                  {@render Checkmark()}
                {/if}
              {/snippet}
            </Menubar.CheckboxItem>
          </Menubar.CheckboxGroup>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>

    <Menubar.Menu value="profile">
      <Menubar.Trigger>Profiles</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content align="start" sideOffset={6} class="w-56">
          <Menubar.RadioGroup value={selectedProfile}>
            {#each profiles as profile (profile.value)}
              <Menubar.RadioItem value={profile.value}>
                {#snippet children({ checked })}
                  {profile.label}
                  {#if checked}
                    {@render Checkmark()}
                  {/if}
                {/snippet}
              </Menubar.RadioItem>
            {/each}
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item>Add profile</Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
</Story>
