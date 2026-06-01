<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { DateRangePicker } from "../index.ts"

  const { Story } = defineMeta({
    title: "Date Range Picker",
    component: DateRangePicker.Root,
  })

  const inputTypes = ["start", "end"] as const
</script>

{#snippet CalendarIcon()}
  <svg class="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 3v4M17 3v4M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{/snippet}

{#snippet ChevronLeft()}
  <svg class="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{/snippet}

{#snippet ChevronRight()}
  <svg class="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{/snippet}

{#snippet DateFields()}
  <div class="flex min-h-12 w-full items-center gap-1 rounded-lg px-2 text-foreground transition-colors">
    {#each inputTypes as type (type)}
      <DateRangePicker.Input {type}>
        {#snippet children({ segments })}
          {#each segments as { part, value }, i (part + i)}
            <DateRangePicker.Segment {part}>{value}</DateRangePicker.Segment>
          {/each}
        {/snippet}
      </DateRangePicker.Input>

      {#if type === "start"}
        <span class="px-1 text-muted-foreground" aria-hidden="true">to</span>
      {/if}
    {/each}

    <DateRangePicker.Trigger aria-label="Open date range picker">
      {@render CalendarIcon()}
    </DateRangePicker.Trigger>
  </div>
{/snippet}

{#snippet CalendarContent()}
  <DateRangePicker.Content sideOffset={8} collisionPadding={16}>
    <DateRangePicker.Arrow class="hidden sm:block" />
    <DateRangePicker.Calendar>
      {#snippet children({ months, weekdays })}
        <DateRangePicker.Header>
          <DateRangePicker.PrevButton aria-label="Previous month">
            {@render ChevronLeft()}
          </DateRangePicker.PrevButton>
          <DateRangePicker.Heading />
          <DateRangePicker.NextButton aria-label="Next month">
            {@render ChevronRight()}
          </DateRangePicker.NextButton>
        </DateRangePicker.Header>

        <div class="flex max-w-[calc(100vw-4rem)] flex-col gap-4 overflow-x-auto sm:flex-row">
          {#each months as month (month.value)}
            <DateRangePicker.Grid>
              <DateRangePicker.GridHead>
                <DateRangePicker.GridRow>
                  {#each weekdays as weekday (weekday)}
                    <DateRangePicker.HeadCell>{weekday.slice(0, 2)}</DateRangePicker.HeadCell>
                  {/each}
                </DateRangePicker.GridRow>
              </DateRangePicker.GridHead>
              <DateRangePicker.GridBody>
                {#each month.weeks as weekDates (weekDates)}
                  <DateRangePicker.GridRow>
                    {#each weekDates as date (date)}
                      <DateRangePicker.Cell {date} month={month.value}>
                        <DateRangePicker.Day>{date.day}</DateRangePicker.Day>
                      </DateRangePicker.Cell>
                    {/each}
                  </DateRangePicker.GridRow>
                {/each}
              </DateRangePicker.GridBody>
            </DateRangePicker.Grid>
          {/each}
        </div>
      {/snippet}
    </DateRangePicker.Calendar>
  </DateRangePicker.Content>
{/snippet}

<Story name="Default" asChild>
  <div class="min-h-[34rem] bg-background p-8 text-foreground">
    <div class="max-w-xl rounded-xl border-2 border-border bg-surface p-6">
      <p class="mb-2 text-sm font-semibold text-caption">Plan an itinerary</p>
      <DateRangePicker.Root weekdayFormat="short" fixedWeeks={true} numberOfMonths={2}>
        <DateRangePicker.Label>Travel window</DateRangePicker.Label>
        {@render DateFields()}
        {@render CalendarContent()}
      </DateRangePicker.Root>
    </div>
  </div>
</Story>

<Story name="Disabled" asChild>
  <div class="bg-background p-8 text-foreground">
    <DateRangePicker.Root disabled weekdayFormat="short" fixedWeeks={true}>
      <DateRangePicker.Label>Unavailable dates</DateRangePicker.Label>
      {@render DateFields()}
    </DateRangePicker.Root>
  </div>
</Story>
