<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Label, RadioGroup } from "../index.ts"

  const options = [
    {
      value: "standard",
      label: "Standard",
      description: "Balanced controls for day-to-day planning.",
    },
    {
      value: "focused",
      label: "Focused",
      description: "Reduce noise and surface only urgent transitions.",
    },
    {
      value: "guided",
      label: "Guided",
      description: "Include prompts and checklists for every step.",
    },
  ]

  const { Story } = defineMeta({
    title: "Radio Group",
    component: RadioGroup.Root,
  })
</script>

{#snippet option(id: string, label: string, description: string, value: string)}
  <RadioGroup.Item
    {value}
    id={id}
    class="flex w-full items-start gap-3 rounded-lg border-2 border-border bg-background p-4 text-left transition-colors data-[state=checked]:border-primary size-auto"
  >
    {#snippet children({ checked })}
      <span
        class="inline-flex size-5 shrink-0 items-center justify-center rounded-full border-2 {checked ? 'border-primary bg-primary' : 'border-border bg-field'} transition-all"
      >
        {#if checked}
          <span class="size-2 rounded-full bg-primary-foreground"></span>
        {/if}
      </span>
      <div class="grid gap-1 text-sm font-medium leading-none">
        <span class="font-semibold text-foreground">{label}</span>
        <span class="text-muted-foreground">{description}</span>
      </div>
    {/snippet}
  </RadioGroup.Item>
{/snippet}

<Story name="Default" asChild>
  <RadioGroup.Root value="focused" name="planning-mode" class="max-w-lg rounded-lg border-2 border-border bg-surface p-6">
    {#each options as item (item.value)}
      {@render option(`radio-${item.value}`, item.label, item.description, item.value)}
    {/each}
  </RadioGroup.Root>
</Story>

<Story name="Horizontal" asChild>
  <RadioGroup.Root value="standard" orientation="horizontal" class="max-w-2xl rounded-lg border-2 border-border bg-surface p-6">
    {#each options as item (item.value)}
      <div class="flex items-center gap-3">
        <RadioGroup.Item id={`horizontal-${item.value}`} value={item.value} />
        <Label.Root for={`horizontal-${item.value}`} class="typo-sm text-foreground">
          {item.label}
        </Label.Root>
      </div>
    {/each}
  </RadioGroup.Root>
</Story>

<Story name="Disabled And Readonly" asChild>
  <div class="grid max-w-lg gap-4">
    <RadioGroup.Root value="focused" disabled class="rounded-lg border-2 border-border bg-surface p-6">
      {@render option("radio-disabled-standard", "Standard", "The whole group is disabled.", "standard")}
      {@render option("radio-disabled-focused", "Focused", "The current selection is visible but locked.", "focused")}
    </RadioGroup.Root>

    <RadioGroup.Root value="guided" readonly class="rounded-lg border-2 border-border bg-surface p-6">
      {@render option("radio-readonly-focused", "Focused", "Focusable, but value changes are prevented.", "focused")}
      {@render option("radio-readonly-guided", "Guided", "Readonly state is inherited from the root.", "guided")}
    </RadioGroup.Root>
  </div>
</Story>

<Story name="Custom Indicator" asChild>
  <RadioGroup.Root value="signal" class="max-w-lg rounded-lg border-2 border-border bg-surface p-6">
    <div class="flex items-center gap-3">
      <RadioGroup.Item id="radio-custom" value="signal" class="size-6">
        {#snippet children({ checked })}
          {#if checked}
            <svg class="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 1.5 9.7 6l4.8.2-3.8 3 1.3 4.6L8 11.2l-4 2.6 1.3-4.6-3.8-3L6.3 6 8 1.5Z" />
            </svg>
          {/if}
        {/snippet}
      </RadioGroup.Item>
      <Label.Root for="radio-custom" class="typo-sm text-foreground">
        Use a custom inline SVG indicator
      </Label.Root>
    </div>
  </RadioGroup.Root>
</Story>
