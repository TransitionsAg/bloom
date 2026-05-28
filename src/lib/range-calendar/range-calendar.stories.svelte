<script lang="ts" module>
  import { CalendarDate, type DateValue } from "@internationalized/date"
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { RangeCalendar } from "../index.ts"

  const selectedRange = {
    start: new CalendarDate(2026, 5, 27),
    end: new CalendarDate(2026, 6, 2),
  }

  const { Story } = defineMeta({
    title: "Range Calendar",
    component: RangeCalendar.Root,
  })
</script>

{#snippet calendarGrid(months: { weeks: DateValue[][]; value: DateValue }[], weekdays: string[])}
  <div class="mt-4 flex max-w-[calc(100vw-4rem)] flex-col gap-4 overflow-x-auto sm:flex-row">
    {#each months as month, index (index)}
      <RangeCalendar.Grid>
        <RangeCalendar.GridHead>
          <RangeCalendar.GridRow>
            {#each weekdays as day, index (index)}
              <RangeCalendar.HeadCell>{day.slice(0, 2)}</RangeCalendar.HeadCell>
            {/each}
          </RangeCalendar.GridRow>
        </RangeCalendar.GridHead>
        <RangeCalendar.GridBody>
          {#each month.weeks as weekDates, index (index)}
            <RangeCalendar.GridRow>
              {#each weekDates as date, index (index)}
                <RangeCalendar.Cell {date} month={month.value}>
                  <RangeCalendar.Day>{date.day}</RangeCalendar.Day>
                </RangeCalendar.Cell>
              {/each}
            </RangeCalendar.GridRow>
          {/each}
        </RangeCalendar.GridBody>
      </RangeCalendar.Grid>
    {/each}
  </div>
{/snippet}

<Story name="Default" asChild>
  <RangeCalendar.Root weekdayFormat="short" fixedWeeks value={selectedRange}>
    {#snippet children({ months, weekdays })}
      <RangeCalendar.Header>
        <RangeCalendar.PrevButton aria-label="Previous month" />
        <RangeCalendar.Heading />
        <RangeCalendar.NextButton aria-label="Next month" />
      </RangeCalendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </RangeCalendar.Root>
</Story>

<Story name="Month And Year Select" asChild>
  <RangeCalendar.Root weekdayFormat="short" fixedWeeks value={selectedRange}>
    {#snippet children({ months, weekdays })}
      <RangeCalendar.Header>
        <RangeCalendar.MonthSelect aria-label="Select month" class="w-full" />
        <RangeCalendar.YearSelect aria-label="Select year" />
      </RangeCalendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </RangeCalendar.Root>
</Story>

<Story name="Multiple Months" asChild>
  <RangeCalendar.Root
    weekdayFormat="short"
    fixedWeeks
    value={selectedRange}
    numberOfMonths={2}
    pagedNavigation
  >
    {#snippet children({ months, weekdays })}
      <RangeCalendar.Header>
        <RangeCalendar.PrevButton aria-label="Previous months" />
        <RangeCalendar.Heading />
        <RangeCalendar.NextButton aria-label="Next months" />
      </RangeCalendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </RangeCalendar.Root>
</Story>

<Story name="Disabled" asChild>
  <RangeCalendar.Root weekdayFormat="short" fixedWeeks value={selectedRange} disabled>
    {#snippet children({ months, weekdays })}
      <RangeCalendar.Header>
        <RangeCalendar.PrevButton aria-label="Previous month" />
        <RangeCalendar.Heading />
        <RangeCalendar.NextButton aria-label="Next month" />
      </RangeCalendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </RangeCalendar.Root>
</Story>
