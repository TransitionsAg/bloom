<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Combobox } from "../index.ts"

  const items = [
    { value: "design-systems", label: "Design systems", group: "Practice" },
    { value: "interaction", label: "Interaction design", group: "Practice" },
    { value: "research", label: "User research", group: "Practice" },
    { value: "svelte", label: "Svelte", group: "Tools" },
    { value: "typescript", label: "TypeScript", group: "Tools" },
    { value: "storybook", label: "Storybook", group: "Tools" },
    { value: "accessibility", label: "Accessibility", group: "Focus" },
    { value: "performance", label: "Performance", group: "Focus" },
  ]

  const { Story } = defineMeta({
    title: "Combobox",
    component: Combobox.Root,
  })
</script>

<script lang="ts">
  let searchValue = $state("")

  const filteredItems = $derived(
    searchValue === ""
      ? items
      : items.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()))
  )

  const groupedItems = $derived(
    ["Practice", "Tools", "Focus"].map((group) => ({
      group,
      items: filteredItems.filter((item) => item.group === group),
    })).filter((section) => section.items.length > 0)
  )
</script>

{#snippet chevron()}
  <svg
    class="size-5"
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

<Story name="Default" asChild>
  <div class="w-full max-w-sm rounded-lg border-2 border-border bg-background p-5">
    <Combobox.Root
      type="single"
      name="discipline"
      onOpenChangeComplete={(open) => {
        if (!open) searchValue = ""
      }}
    >
      <div class="relative">
        <Combobox.Input
          class="pr-12"
          placeholder="Choose a discipline"
          aria-label="Choose a discipline"
          oninput={(event) => (searchValue = event.currentTarget.value)}
        />
        <Combobox.Trigger class="absolute right-1 top-1/2 -translate-y-1/2" aria-label="Open list">
          {@render chevron()}
        </Combobox.Trigger>
      </div>

      <Combobox.Portal>
        <Combobox.Content sideOffset={8}>
          <Combobox.ScrollUpButton>
            {@render arrowUp()}
          </Combobox.ScrollUpButton>
          <Combobox.Viewport>
            {#each groupedItems as section (section.group)}
              <Combobox.Group>
                <Combobox.GroupHeading>{section.group}</Combobox.GroupHeading>
                {#each section.items as item (item.value)}
                  <Combobox.Item value={item.value} label={item.label}>
                    {#snippet children({ selected })}
                      <span>{item.label}</span>
                      {#if selected}
                        <span class="ml-auto text-primary">{@render checkmark()}</span>
                      {/if}
                    {/snippet}
                  </Combobox.Item>
                {/each}
              </Combobox.Group>
            {:else}
              <span class="block px-3 py-4 text-sm text-caption">No results found.</span>
            {/each}
          </Combobox.Viewport>
          <Combobox.ScrollDownButton>
            {@render arrowDown()}
          </Combobox.ScrollDownButton>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>
  </div>
</Story>

<Story name="Disabled" asChild>
  <div class="w-full max-w-sm">
    <Combobox.Root type="single">
      <div class="relative">
        <Combobox.Input disabled placeholder="Disabled combobox" aria-label="Disabled combobox" />
        <Combobox.Trigger disabled class="absolute right-1 top-1/2 -translate-y-1/2" aria-label="Open list">
          {@render chevron()}
        </Combobox.Trigger>
      </div>
    </Combobox.Root>
  </div>
</Story>
