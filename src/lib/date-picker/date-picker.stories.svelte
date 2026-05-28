<script lang="ts" module>
  import { CalendarDate } from "@internationalized/date"
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { DatePicker } from "../index.ts"

  const selectedDate = new CalendarDate(2026, 5, 27)

  const { Story } = defineMeta({
    title: "Date Picker",
    component: DatePicker.Root,
  })
</script>

{#snippet calendarIcon()}
  <svg class="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M6 2.5v3M14 2.5v3M3.5 8h13M5 4h10a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5H5A1.5 1.5 0 0 1 3.5 15V5.5A1.5 1.5 0 0 1 5 4Z"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/snippet}

{#snippet chevronLeft()}
  <svg class="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="m12 15-5-5 5-5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/snippet}

{#snippet chevronRight()}
  <svg class="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="m8 5 5 5-5 5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/snippet}

{#snippet field()}
  <DatePicker.Input>
    {#snippet children({ segments })}
      {#each segments as { part, value }, index (part + index)}
        <DatePicker.Segment {part}>{value}</DatePicker.Segment>
      {/each}
      <DatePicker.Trigger aria-label="Open calendar">
        {@render calendarIcon()}
      </DatePicker.Trigger>
    {/snippet}
  </DatePicker.Input>
{/snippet}

{#snippet calendar()}
  <DatePicker.Portal>
    <DatePicker.Content sideOffset={8}>
      <DatePicker.Arrow />
      <DatePicker.Calendar>
        {#snippet children({ months, weekdays })}
          <DatePicker.Header>
            <DatePicker.PrevButton aria-label="Previous month">
              {@render chevronLeft()}
            </DatePicker.PrevButton>
            <DatePicker.Heading />
            <DatePicker.NextButton aria-label="Next month">
              {@render chevronRight()}
            </DatePicker.NextButton>
          </DatePicker.Header>
          <div class="flex flex-col gap-4 sm:flex-row">
            {#each months as month (month.value)}
              <DatePicker.Grid>
                <DatePicker.GridHead>
                  <DatePicker.GridRow>
                    {#each weekdays as day (day)}
                      <DatePicker.HeadCell>{day.slice(0, 2)}</DatePicker.HeadCell>
                    {/each}
                  </DatePicker.GridRow>
                </DatePicker.GridHead>
                <DatePicker.GridBody>
                  {#each month.weeks as weekDates (weekDates)}
                    <DatePicker.GridRow>
                      {#each weekDates as date (date.toString())}
                        <DatePicker.Cell {date} month={month.value}>
                          <DatePicker.Day>{date.day}</DatePicker.Day>
                        </DatePicker.Cell>
                      {/each}
                    </DatePicker.GridRow>
                  {/each}
                </DatePicker.GridBody>
              </DatePicker.Grid>
            {/each}
          </div>
        {/snippet}
      </DatePicker.Calendar>
    </DatePicker.Content>
  </DatePicker.Portal>
{/snippet}

<Story name="Default" asChild>
  <DatePicker.Root value={selectedDate} weekdayFormat="short" fixedWeeks>
    <div class="flex max-w-xs flex-col gap-2">
      <DatePicker.Label>Delivery date</DatePicker.Label>
      {@render field()}
    </div>
    {@render calendar()}
  </DatePicker.Root>
</Story>

<Story name="Two Months" asChild>
  <DatePicker.Root value={selectedDate} numberOfMonths={2} weekdayFormat="short" fixedWeeks>
    <div class="flex max-w-xs flex-col gap-2">
      <DatePicker.Label>Project kickoff</DatePicker.Label>
      {@render field()}
    </div>
    {@render calendar()}
  </DatePicker.Root>
</Story>

<Story name="Disabled" asChild>
  <DatePicker.Root value={selectedDate} disabled>
    <div class="flex max-w-xs flex-col gap-2">
      <DatePicker.Label>Disabled date picker</DatePicker.Label>
      {@render field()}
    </div>
  </DatePicker.Root>
</Story>
