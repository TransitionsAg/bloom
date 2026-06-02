<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Tooltip } from "../index.ts"

  const { Story } = defineMeta({
    title: "Tooltip",
    component: Tooltip.Root,
  })
</script>

{#snippet Tip(label: string, detail: string)}
  <Tooltip.Portal>
    <Tooltip.Content sideOffset={8}>
      <p class="typo-sm">{label}</p>
      <p class="mt-1 text-xs font-medium leading-5 text-muted-foreground">{detail}</p>
      <Tooltip.Arrow width={10} height={5} />
    </Tooltip.Content>
  </Tooltip.Portal>
{/snippet}

<Story name="Default" asChild>
  <Tooltip.Provider delayDuration={200}>
    <Tooltip.Root>
      <Tooltip.Trigger class="rounded bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-accent hover:text-primary-foreground active:bg-primary-accent">
        Hover for details
      </Tooltip.Trigger>
      {@render Tip("Bloom tooltip", "Supplementary context appears without interrupting the task.")}
    </Tooltip.Root>
  </Tooltip.Provider>
</Story>

<Story name="Sides" asChild>
  <Tooltip.Provider delayDuration={150}>
    <div class="grid w-fit grid-cols-3 gap-3">
      <div></div>
      <Tooltip.Root>
        <Tooltip.Trigger class="rounded border-2 border-border bg-surface px-4 py-2 typo-sm hover:bg-muted hover:text-foreground">
          Top
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="top" sideOffset={8}>Placed above the trigger.</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
      <div></div>

      <Tooltip.Root>
        <Tooltip.Trigger class="rounded border-2 border-border bg-surface px-4 py-2 typo-sm hover:bg-muted hover:text-foreground">
          Left
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="left" sideOffset={8}>Placed to the left.</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
      <div class="rounded-lg border-2 border-border bg-background px-6 py-3 text-center typo-sm text-muted-foreground">
        Trigger sides
      </div>
      <Tooltip.Root>
        <Tooltip.Trigger class="rounded border-2 border-border bg-surface px-4 py-2 typo-sm hover:bg-muted hover:text-foreground">
          Right
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right" sideOffset={8}>Placed to the right.</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <div></div>
      <Tooltip.Root>
        <Tooltip.Trigger class="rounded border-2 border-border bg-surface px-4 py-2 typo-sm hover:bg-muted hover:text-foreground">
          Bottom
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side="bottom" sideOffset={8}>Placed below the trigger.</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
      <div></div>
    </div>
  </Tooltip.Provider>
</Story>

<Story name="Instant" asChild>
  <Tooltip.Provider delayDuration={0}>
    <Tooltip.Root>
      <Tooltip.Trigger class="rounded bg-secondary px-5 py-3 font-semibold text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent hover:text-secondary-foreground">
        No delay
      </Tooltip.Trigger>
      {@render Tip("Instant tooltip", "The provider can remove the default hover delay for dense interfaces.")}
    </Tooltip.Root>
  </Tooltip.Provider>
</Story>
