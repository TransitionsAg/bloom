<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Collapsible } from "../index.ts"

  const { Story } = defineMeta({
    title: "Collapsible",
    component: Collapsible.Root,
  })
</script>

{#snippet indicator()}
  <span class="inline-flex size-8 items-center justify-center rounded bg-transparent text-muted-foreground transition-colors group-hover:text-foreground">
    <svg
      class="size-[18px]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="m7.5 5 5 5-5 5" />
    </svg>
  </span>
{/snippet}

{#snippet releaseContent()}
  <div class="space-y-3">
    <p>
      Confirm migration notes, owner sign-off, and a rollback decision before the release window.
    </p>
    <div class="grid gap-2 sm:grid-cols-3">
      <span class="rounded bg-muted px-3 py-2 text-foreground">Docs ready</span>
      <span class="rounded bg-muted px-3 py-2 text-foreground">Owner assigned</span>
      <span class="rounded bg-muted px-3 py-2 text-foreground">Rollback noted</span>
    </div>
  </div>
{/snippet}

<Story name="Default" asChild>
  <Collapsible.Root class="max-w-md">
    <Collapsible.Trigger class="group">
      <span>Release checklist</span>
      {@render indicator()}
    </Collapsible.Trigger>
    <Collapsible.Content>
      {@render releaseContent()}
    </Collapsible.Content>
  </Collapsible.Root>
</Story>

<Story name="Initially Open" asChild>
  <Collapsible.Root open class="max-w-md">
    <Collapsible.Trigger class="group">
      <span>Sprint health</span>
      {@render indicator()}
    </Collapsible.Trigger>
    <Collapsible.Content>
      Scope is stable, customer-facing changes are paired with acceptance notes, and open risks have
      owners.
    </Collapsible.Content>
  </Collapsible.Root>
</Story>

<Story name="Transparent" asChild>
  <Collapsible.Root open variant="transparent" class="max-w-md border-y-2 border-border rounded-none">
    <Collapsible.Trigger class="group px-0">
      <span>Handoff notes</span>
      {@render indicator()}
    </Collapsible.Trigger>
    <Collapsible.Content class="border-border">
      <p class="px-0">
        Keep the owner rotation visible, link the decision record, and call out any follow-up review.
      </p>
    </Collapsible.Content>
  </Collapsible.Root>
</Story>

<Story name="Hidden Until Found" asChild>
  <Collapsible.Root class="max-w-md">
    <Collapsible.Trigger class="group">
      <span>Searchable release note</span>
      {@render indicator()}
    </Collapsible.Trigger>
    <Collapsible.Content hiddenUntilFound>
      This collapsed section includes searchable content for browser find-in-page support.
    </Collapsible.Content>
  </Collapsible.Root>
</Story>

<Story name="Disabled" asChild>
  <Collapsible.Root open disabled class="max-w-md">
    <Collapsible.Trigger class="group">
      <span>Locked retrospective</span>
      {@render indicator()}
    </Collapsible.Trigger>
    <Collapsible.Content>
      Retrospective notes remain visible here, but the trigger is disabled until the facilitator
      unlocks edits.
    </Collapsible.Content>
  </Collapsible.Root>
</Story>
