<script lang="ts" module>
  import { CalendarDate, type DateValue } from "@internationalized/date"
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Calendar } from "../index.ts"

  const selectedDate = new CalendarDate(2026, 5, 27)
  const selectedDates = [selectedDate, selectedDate.add({ days: 2 }), selectedDate.add({ days: 6 })]

  const { Story } = defineMeta({
    title: "Calendar",
    component: Calendar.Root,
  })
</script>

{#snippet calendarGrid(months: { weeks: DateValue[][]; value: DateValue }[], weekdays: string[])}
  <div class="mt-4 flex flex-col gap-4 sm:flex-row">
    {#each months as month, index (index)}
      <Calendar.Grid>
        <Calendar.GridHead>
          <Calendar.GridRow>
            {#each weekdays as day, index (index)}
              <Calendar.HeadCell>{day.slice(0, 2)}</Calendar.HeadCell>
            {/each}
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody>
          {#each month.weeks as weekDates, index (index)}
            <Calendar.GridRow>
              {#each weekDates as date, index (index)}
                <Calendar.Cell {date} month={month.value}>
                  <Calendar.Day>{date.day}</Calendar.Day>
                </Calendar.Cell>
              {/each}
            </Calendar.GridRow>
          {/each}
        </Calendar.GridBody>
      </Calendar.Grid>
    {/each}
  </div>
{/snippet}

<Story name="Default" asChild>
  <Calendar.Root weekdayFormat="short" fixedWeeks type="single" value={selectedDate}>
    {#snippet children({ months, weekdays })}
      <Calendar.Header>
        <Calendar.PrevButton aria-label="Previous month" />
        <Calendar.Heading />
        <Calendar.NextButton aria-label="Next month" />
      </Calendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </Calendar.Root>
</Story>

<Story name="Month And Year Select" asChild>
  <Calendar.Root weekdayFormat="short" fixedWeeks type="single" value={selectedDate}>
    {#snippet children({ months, weekdays })}
      <Calendar.Header>
        <Calendar.MonthSelect aria-label="Select month" class="w-full" />
        <Calendar.YearSelect aria-label="Select year" />
      </Calendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </Calendar.Root>
</Story>

<Story name="Multiple Months" asChild>
  <Calendar.Root
    weekdayFormat="short"
    fixedWeeks
    type="multiple"
    value={selectedDates}
    numberOfMonths={2}
    pagedNavigation
  >
    {#snippet children({ months, weekdays })}
      <Calendar.Header>
        <Calendar.PrevButton aria-label="Previous months" />
        <Calendar.Heading />
        <Calendar.NextButton aria-label="Next months" />
      </Calendar.Header>
      {@render calendarGrid(months, weekdays)}
    {/snippet}
  </Calendar.Root>
</Story>
