<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Select } from "../index.ts"

  const items = [
    { value: "meadow", label: "Meadow", group: "Landscapes" },
    { value: "orchard", label: "Orchard", group: "Landscapes" },
    { value: "tidal", label: "Tidal Flats", group: "Landscapes" },
    { value: "monarch", label: "Monarch", group: "Species" },
    { value: "willow", label: "Willow", group: "Species" },
    { value: "lichen", label: "Lichen", group: "Species", disabled: true },
    { value: "spring", label: "Spring", group: "Seasons" },
    { value: "summer", label: "Summer", group: "Seasons" },
    { value: "autumn", label: "Autumn", group: "Seasons" },
    { value: "winter", label: "Winter", group: "Seasons" },
  ]

  const groupedItems = ["Landscapes", "Species", "Seasons"].map((group) => ({
    group,
    items: items.filter((item) => item.group === group),
  }))

  const { Story } = defineMeta({
    title: "Select",
    component: Select.Root,
  })
</script>

<script lang="ts">
  let selectedHabitat = $state("orchard")
  let selectedSeasons = $state<string[]>(["spring", "autumn"])
</script>

{#snippet chevron()}
  <svg
    class="size-5 text-muted-foreground"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m6 8 4 4 4-4" />
  </svg>
{/snippet}

{#snippet arrowUp()}
  <svg
    class="size-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m6 12 4-4 4 4" />
  </svg>
{/snippet}

{#snippet arrowDown()}
  <svg
    class="size-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m6 8 4 4 4-4" />
  </svg>
{/snippet}

{#snippet checkmark()}
  <svg
    class="size-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m4 10 4 4 8-8" />
  </svg>
{/snippet}

{#snippet menuContent()}
  <Select.Portal>
    <Select.Content sideOffset={8}>
      <Select.ScrollUpButton>
        {@render arrowUp()}
      </Select.ScrollUpButton>
      <Select.Viewport>
        {#each groupedItems as section (section.group)}
          <Select.Group>
            <Select.GroupHeading>{section.group}</Select.GroupHeading>
            {#each section.items as item (item.value)}
              <Select.Item value={item.value} label={item.label} disabled={item.disabled}>
                {#snippet children({ selected })}
                  <span>{item.label}</span>
                  {#if selected}
                    <span class="ml-auto text-primary">{@render checkmark()}</span>
                  {/if}
                {/snippet}
              </Select.Item>
            {/each}
          </Select.Group>
        {/each}
      </Select.Viewport>
      <Select.ScrollDownButton>
        {@render arrowDown()}
      </Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
{/snippet}

<Story name="Default" asChild>
  <div class="w-full max-w-sm rounded-lg border-2 border-border bg-background p-5">
    <Select.Root type="single" items={items} value={selectedHabitat}>
      <Select.Trigger aria-label="Select habitat">
        <Select.Value placeholder="Select habitat" />
        <span class="ml-auto">{@render chevron()}</span>
      </Select.Trigger>
      {@render menuContent()}
    </Select.Root>
  </div>
</Story>

<Story name="Multiple" asChild>
  <div class="w-full max-w-sm rounded-lg border-2 border-border bg-background p-5">
    <Select.Root type="multiple" items={items} value={selectedSeasons}>
      <Select.Trigger aria-label="Select seasons">
        <Select.Value placeholder="Select seasons" />
        <span class="ml-auto">{@render chevron()}</span>
      </Select.Trigger>
      {@render menuContent()}
    </Select.Root>
  </div>
</Story>

<Story name="Disabled" asChild>
  <div class="w-full max-w-sm">
    <Select.Root type="single" items={items} disabled>
      <Select.Trigger aria-label="Disabled select">
        <Select.Value placeholder="Unavailable" />
        <span class="ml-auto">{@render chevron()}</span>
      </Select.Trigger>
    </Select.Root>
  </div>
</Story>
