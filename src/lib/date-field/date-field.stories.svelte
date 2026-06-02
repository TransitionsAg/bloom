<script lang="ts" module>
  import { CalendarDate, CalendarDateTime, today, getLocalTimeZone } from "@internationalized/date"
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { DateField } from "../index.ts"

  const { Story } = defineMeta({
    title: "Date Field",
    component: DateField.Root,
  })
</script>

{#snippet DateFieldInput(name: string)}
  <DateField.Input {name}>
    {#snippet children({ segments })}
      {#each segments as { part, value }, index (part + index)}
        <DateField.Segment {part}>{value}</DateField.Segment>
      {/each}
    {/snippet}
  </DateField.Input>
{/snippet}

<Story name="Default" asChild>
  <DateField.Root>
    <div class="flex w-full max-w-sm flex-col gap-2">
      <DateField.Label>Birthday</DateField.Label>
      {@render DateFieldInput("birthday")}
    </div>
  </DateField.Root>
</Story>

<Story name="With Value" asChild>
  <DateField.Root value={new CalendarDate(2026, 5, 27)}>
    <div class="flex w-full max-w-sm flex-col gap-2">
      <DateField.Label>Project start</DateField.Label>
      {@render DateFieldInput("project-start")}
    </div>
  </DateField.Root>
</Story>

<Story name="Date And Time" asChild>
  <DateField.Root value={new CalendarDateTime(2026, 5, 27, 14, 30)} granularity="minute">
    <div class="flex w-full max-w-md flex-col gap-2">
      <DateField.Label>Appointment</DateField.Label>
      {@render DateFieldInput("appointment")}
    </div>
  </DateField.Root>
</Story>

<Story name="States" asChild>
  <div class="grid w-full max-w-3xl gap-5 sm:grid-cols-2">
    <DateField.Root value={today(getLocalTimeZone()).subtract({ days: 1 })} minValue={today(getLocalTimeZone())}>
      <div class="flex flex-col gap-2">
        <DateField.Label>Invalid date</DateField.Label>
        {@render DateFieldInput("invalid-date")}
        <p class="typo-caption">Must be today or later.</p>
      </div>
    </DateField.Root>

    <DateField.Root disabled value={new CalendarDate(2026, 6, 12)}>
      <div class="flex flex-col gap-2">
        <DateField.Label>Disabled date</DateField.Label>
        {@render DateFieldInput("disabled-date")}
        <p class="typo-caption">Unavailable until scheduling opens.</p>
      </div>
    </DateField.Root>
  </div>
</Story>
