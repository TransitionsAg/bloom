<script lang="ts" module>
  import { Time } from "@internationalized/date"
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { TimeField } from "../index.ts"

  const { Story } = defineMeta({
    title: "Time Field",
    component: TimeField.Root,
  })
</script>

{#snippet TimeFieldInput(name: string)}
  <TimeField.Input {name}>
    {#snippet children({ segments })}
      {#each segments as { part, value }, index (part + index)}
        <TimeField.Segment {part}>{value}</TimeField.Segment>
      {/each}
    {/snippet}
  </TimeField.Input>
{/snippet}

<Story name="Default" asChild>
  <TimeField.Root>
    <div class="flex w-full max-w-sm flex-col gap-2">
      <TimeField.Label>Appointment time</TimeField.Label>
      {@render TimeFieldInput("appointment-time")}
    </div>
  </TimeField.Root>
</Story>

<Story name="With Value" asChild>
  <TimeField.Root value={new Time(14, 30)}>
    <div class="flex w-full max-w-sm flex-col gap-2">
      <TimeField.Label>Project review</TimeField.Label>
      {@render TimeFieldInput("project-review")}
    </div>
  </TimeField.Root>
</Story>

<Story name="Seconds And 24 Hour" asChild>
  <TimeField.Root value={new Time(16, 45, 20)} granularity="second" hourCycle={24}>
    <div class="flex w-full max-w-sm flex-col gap-2">
      <TimeField.Label>Cutoff time</TimeField.Label>
      {@render TimeFieldInput("cutoff-time")}
    </div>
  </TimeField.Root>
</Story>

<Story name="States" asChild>
  <div class="grid w-full max-w-3xl gap-5 sm:grid-cols-2">
    <TimeField.Root value={new Time(8, 0)} minValue={new Time(9, 0)}>
      <div class="flex flex-col gap-2">
        <TimeField.Label>Invalid time</TimeField.Label>
        {@render TimeFieldInput("invalid-time")}
        <p class="text-sm text-caption">Must be 9:00 AM or later.</p>
      </div>
    </TimeField.Root>

    <TimeField.Root disabled value={new Time(12, 15)}>
      <div class="flex flex-col gap-2">
        <TimeField.Label>Disabled time</TimeField.Label>
        {@render TimeFieldInput("disabled-time")}
        <p class="text-sm text-caption">Unavailable until scheduling opens.</p>
      </div>
    </TimeField.Root>
  </div>
</Story>
