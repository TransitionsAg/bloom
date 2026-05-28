<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { ScrollArea } from "../index.ts"

  const rows = Array.from({ length: 18 }, (_, index) => `Quarterly transition note ${index + 1}`)

  const columns = ["Discovery", "Mapping", "Readiness", "Sequencing", "Delivery", "Review"]

  const { Story } = defineMeta({
    title: "Scroll Area",
    component: ScrollArea.Root,
  })
</script>

{#snippet VerticalArea(type: "hover" | "scroll" | "auto" | "always" = "hover")}
  <ScrollArea.Root {type} class="h-72 w-80">
    <ScrollArea.Viewport class="p-5">
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold tracking-[-0.01em]">Transition log</h3>
          <p class="mt-1 text-sm text-muted-foreground">
            A compact list of activities with native-feeling scroll behavior.
          </p>
        </div>

        <div class="grid gap-2">
          {#each rows as row, index}
            <div class="rounded border border-border bg-background p-3">
              <p class="text-sm font-semibold">{row}</p>
              <p class="mt-1 text-xs text-muted-foreground">
                Owner {index + 1} updated dependencies and next actions.
              </p>
            </div>
          {/each}
        </div>
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
{/snippet}

<Story name="Default" asChild>
  {@render VerticalArea()}
</Story>

<Story name="Always Visible" asChild>
  {@render VerticalArea("always")}
</Story>

<Story name="Horizontal" asChild>
  <ScrollArea.Root type="always" class="w-96">
    <ScrollArea.Viewport>
      <div class="flex w-max gap-3 p-5">
        {#each columns as column}
          <section class="w-48 rounded border border-border bg-background p-4">
            <h3 class="text-sm font-semibold">{column}</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              Status, owner, risks, and handoff notes for this transition stage.
            </p>
          </section>
        {/each}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</Story>

<Story name="Both Directions" asChild>
  <ScrollArea.Root type="always" class="h-64 w-96">
    <ScrollArea.Viewport>
      <div class="grid w-[640px] grid-cols-3 gap-3 p-5">
        {#each rows.slice(0, 12) as row, index}
          <div class="rounded border border-border bg-background p-3">
            <p class="text-sm font-semibold">{row}</p>
            <p class="mt-1 text-xs text-muted-foreground">
              Stage {columns[index % columns.length]} includes long-form notes and dependencies.
            </p>
          </div>
        {/each}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</Story>
