<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"
  import { CalendarDate } from "@internationalized/date"

  import { DateRangeField } from "../index.ts"

  const { Story } = defineMeta({
    title: "Date Range Field",
    component: DateRangeField.Root,
  })

  const inputTypes = ["start", "end"] as const
  const defaultValue = {
    start: new CalendarDate(2026, 5, 12),
    end: new CalendarDate(2026, 5, 18),
  }
</script>

{#snippet DateSegments(type: (typeof inputTypes)[number])}
  <DateRangeField.Input {type}>
    {#snippet children({ segments })}
      {#each segments as { part, value }, index (part + index)}
        <DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
      {/each}
    {/snippet}
  </DateRangeField.Input>
{/snippet}

{#snippet Field(value = defaultValue, disabled = false)}
  <DateRangeField.Root {value} {disabled}>
    <DateRangeField.Label>Travel window</DateRangeField.Label>
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
      {@render DateSegments("start")}
      <span class="px-1 text-sm font-semibold text-muted-foreground" aria-hidden="true">to</span>
      {@render DateSegments("end")}
    </div>
  </DateRangeField.Root>
{/snippet}

<Story name="Default" asChild>
  <div class="flex min-h-64 items-center justify-center bg-background p-8 text-foreground">
    {@render Field()}
  </div>
</Story>

<Story name="States" asChild>
  <div class="grid gap-8 bg-background p-8 text-foreground">
    {@render Field()}

    <DateRangeField.Root>
      <DateRangeField.Label>Empty range</DateRangeField.Label>
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
        {@render DateSegments("start")}
        <span class="px-1 text-sm font-semibold text-muted-foreground" aria-hidden="true">to</span>
        {@render DateSegments("end")}
      </div>
    </DateRangeField.Root>

    {@render Field(defaultValue, true)}
  </div>
</Story>
