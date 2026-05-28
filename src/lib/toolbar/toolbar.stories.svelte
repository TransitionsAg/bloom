<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Toolbar } from "../index.ts"

  const { Story } = defineMeta({
    title: "Toolbar",
    component: Toolbar.Root,
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
    { value: "left", label: "Align left", icon: "M4 6h16M4 12h10M4 18h16" },
    { value: "center", label: "Align center", icon: "M4 6h16M7 12h10M4 18h16" },
    { value: "right", label: "Align right", icon: "M4 6h16M10 12h10M4 18h16" },
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

<Story name="Default" asChild>
  <Toolbar.Root aria-label="Document controls">
    <Toolbar.Group type="multiple" value={["bold"]} aria-label="Text formatting">
      {#each formattingItems as item (item.value)}
        <Toolbar.GroupItem value={item.value} aria-label={item.label} class="px-0">
          {@render icon(item.icon)}
        </Toolbar.GroupItem>
      {/each}
    </Toolbar.Group>

    <Toolbar.Separator />

    <Toolbar.Group type="single" value="left" aria-label="Text alignment">
      {#each alignmentItems as item (item.value)}
        <Toolbar.GroupItem value={item.value} aria-label={item.label} class="px-0">
          {@render icon(item.icon)}
        </Toolbar.GroupItem>
      {/each}
    </Toolbar.Group>

    <Toolbar.Separator />

    <Toolbar.Button>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z" />
        <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </svg>
      Ask AI
    </Toolbar.Button>
  </Toolbar.Root>
</Story>

<Story name="Vertical" asChild>
  <Toolbar.Root orientation="vertical" aria-label="Editing controls">
    <Toolbar.Group type="multiple" value={["italic"]} aria-label="Text formatting" class="flex-col items-stretch">
      {#each formattingItems as item (item.value)}
        <Toolbar.GroupItem value={item.value} aria-label={item.label} class="px-0">
          {@render icon(item.icon)}
        </Toolbar.GroupItem>
      {/each}
    </Toolbar.Group>
    <Toolbar.Button aria-label="Insert sparkle" class="px-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z" />
      </svg>
    </Toolbar.Button>
    <Toolbar.Link href="https://www.bits-ui.com/docs/components/toolbar" aria-label="Toolbar docs" class="px-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    </Toolbar.Link>
  </Toolbar.Root>
</Story>

<Story name="Disabled" asChild>
  <Toolbar.Root aria-label="Disabled editing controls">
    <Toolbar.Group type="multiple" value={["bold"]} disabled aria-label="Disabled formatting">
      {#each formattingItems as item (item.value)}
        <Toolbar.GroupItem value={item.value} aria-label={item.label} class="px-0">
          {@render icon(item.icon)}
        </Toolbar.GroupItem>
      {/each}
    </Toolbar.Group>

    <Toolbar.Separator />

    <Toolbar.Button disabled>Publish</Toolbar.Button>
  </Toolbar.Root>
</Story>
