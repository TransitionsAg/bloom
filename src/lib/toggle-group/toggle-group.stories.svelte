<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { ToggleGroup } from "../index.ts"

  const { Story } = defineMeta({
    title: "Toggle Group",
    component: ToggleGroup.Root,
  })

  const formattingItems = [
    {
      value: "bold",
      label: "Bold",
      icon: "M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z",
    },
    {
      value: "italic",
      label: "Italic",
      icon: "M10 5h6M8 19h6M13 5l-4 14",
    },
    {
      value: "underline",
      label: "Underline",
      icon: "M7 5v6a5 5 0 0 0 10 0V5M6 19h12",
    },
  ]

  const alignmentItems = [
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
  ]
</script>

{#snippet icon(path: string)}
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
{/snippet}

<Story name="Multiple" asChild>
  <ToggleGroup.Root type="multiple" value={["bold"]} aria-label="Text formatting">
    {#each formattingItems as item (item.value)}
      <ToggleGroup.Item value={item.value} aria-label={item.label} class="px-0">
        {@render icon(item.icon)}
      </ToggleGroup.Item>
    {/each}
  </ToggleGroup.Root>
</Story>

<Story name="Single" asChild>
  <ToggleGroup.Root type="single" value="center" aria-label="Text alignment">
    {#each alignmentItems as item (item.value)}
      <ToggleGroup.Item value={item.value}>{item.label}</ToggleGroup.Item>
    {/each}
  </ToggleGroup.Root>
</Story>

<Story name="Vertical" asChild>
  <ToggleGroup.Root type="single" value="left" orientation="vertical" aria-label="Panel alignment">
    {#each alignmentItems as item (item.value)}
      <ToggleGroup.Item value={item.value}>{item.label}</ToggleGroup.Item>
    {/each}
  </ToggleGroup.Root>
</Story>

<Story name="Disabled" asChild>
  <div class="flex flex-wrap gap-4">
    <ToggleGroup.Root type="multiple" value={["bold"]} disabled aria-label="Disabled formatting">
      {#each formattingItems as item (item.value)}
        <ToggleGroup.Item value={item.value} aria-label={item.label} class="px-0">
          {@render icon(item.icon)}
        </ToggleGroup.Item>
      {/each}
    </ToggleGroup.Root>

    <ToggleGroup.Root type="single" value="center" aria-label="Partially disabled alignment">
      {#each alignmentItems as item, index (item.value)}
        <ToggleGroup.Item value={item.value} disabled={index === 2}>{item.label}</ToggleGroup.Item>
      {/each}
    </ToggleGroup.Root>
  </div>
</Story>
