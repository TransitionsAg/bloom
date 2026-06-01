<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Popover } from "../index.ts"

  const { Story } = defineMeta({
    title: "Popover",
    component: Popover.Root,
  })
</script>

{#snippet Content()}
  <Popover.Portal>
    <Popover.Content sideOffset={8}>
      <div class="flex flex-col gap-3">
        <div>
          <h3 class="text-lg font-extrabold">Crop settings</h3>
          <p class="text-sm text-muted-foreground">Tune the export area before continuing.</p>
        </div>
        <div class="grid gap-2 text-sm">
          <label class="flex items-center justify-between gap-4">
            <span class="text-muted-foreground">Width</span>
            <input
              class="h-10 w-24 rounded border-2 border-border bg-field px-3 text-right text-field-foreground outline-none transition-colors focus-visible:border-primary"
              type="number"
              value="1280"
            />
          </label>
          <label class="flex items-center justify-between gap-4">
            <span class="text-muted-foreground">Height</span>
            <input
              class="h-10 w-24 rounded border-2 border-border bg-field px-3 text-right text-field-foreground outline-none transition-colors focus-visible:border-primary"
              type="number"
              value="720"
            />
          </label>
        </div>
        <div class="flex justify-end gap-2">
          <Popover.Close>Cancel</Popover.Close>
          <Popover.Close class="bg-primary text-primary-foreground hover:bg-primary-accent">
            Apply
          </Popover.Close>
        </div>
      </div>
      <Popover.Arrow />
    </Popover.Content>
  </Popover.Portal>
{/snippet}

<Story name="Default" asChild>
  <Popover.Root>
    <Popover.Trigger>Edit crop</Popover.Trigger>
    {@render Content()}
  </Popover.Root>
</Story>

<Story name="With Overlay" asChild>
  <Popover.Root>
    <Popover.Trigger>Open details</Popover.Trigger>
    <Popover.Portal>
      <Popover.Overlay />
      <Popover.Content sideOffset={8}>
        <div class="flex max-w-sm flex-col gap-3">
          <h3 class="text-lg font-extrabold">Deployment window</h3>
          <p class="text-sm text-muted-foreground">
            This popover includes an overlay while keeping the same Bits UI content props.
          </p>
          <Popover.Close>Close</Popover.Close>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
</Story>

<Story name="Hover" asChild>
  <Popover.Root>
    <Popover.Trigger openOnHover openDelay={200} closeDelay={100} class="bg-secondary text-secondary-foreground hover:bg-secondary-accent data-[state=open]:bg-secondary-accent">
      Hover profile
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content sideOffset={8} class="max-w-xs">
        <div class="flex items-start gap-3">
          <div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">
            B
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="font-extrabold">Bloom System</h3>
            <p class="text-sm text-muted-foreground">
              Accessible floating content for compact workflows.
            </p>
          </div>
        </div>
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
</Story>
