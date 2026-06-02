<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Slider } from "../index.ts"

  const { Story } = defineMeta({
    title: "Slider",
    component: Slider.Root,
  })
</script>

<script lang="ts">
  let singleValue = $state(48)
  let rangeValue = $state([25, 75])
  let labeledValue = $state(40)
  let verticalValue = $state(62)
</script>

<Story name="Single" asChild>
  <div class="max-w-md rounded-lg border-2 border-border bg-surface p-6">
    <Slider.Root type="single" bind:value={singleValue} min={0} max={100} step={1}>
      <Slider.Range />
      <Slider.Thumb index={0} aria-label="Volume" />
    </Slider.Root>
    <p class="mt-3 text-sm font-medium text-muted-foreground">Volume: {singleValue}</p>
  </div>
</Story>

<Story name="Range" asChild>
  <div class="max-w-md rounded-lg border-2 border-border bg-surface p-6">
    <Slider.Root type="multiple" bind:value={rangeValue} min={0} max={100} step={1}>
      {#snippet children({ thumbItems })}
        <Slider.Range />
        {#each thumbItems as { index } (index)}
          <Slider.Thumb {index} aria-label={index === 0 ? "Minimum budget" : "Maximum budget"} />
        {/each}
      {/snippet}
    </Slider.Root>
    <p class="mt-3 text-sm font-medium text-muted-foreground">Budget: {rangeValue[0]}-{rangeValue[1]}</p>
  </div>
</Story>

<Story name="Ticks And Labels" asChild>
  <div class="max-w-md rounded-lg border-2 border-border bg-surface p-6">
    <Slider.Root type="single" bind:value={labeledValue} min={0} max={100} step={25}>
      {#snippet children({ tickItems })}
        <Slider.Range />
        <Slider.Thumb index={0} aria-label="Progress">
          <Slider.ThumbLabel index={0}>{labeledValue}</Slider.ThumbLabel>
        </Slider.Thumb>
        {#each tickItems as { index } (index)}
          <Slider.Tick {index} />
          <Slider.TickLabel {index}>{index * 25}</Slider.TickLabel>
        {/each}
      {/snippet}
    </Slider.Root>
  </div>
</Story>

<Story name="Vertical" asChild>
  <div class="flex h-80 w-40 items-center justify-center rounded-lg border-2 border-border bg-surface p-6">
    <Slider.Root type="single" bind:value={verticalValue} orientation="vertical" min={0} max={100} step={1}>
      <Slider.Range />
      <Slider.Thumb index={0} aria-label="Brightness" />
    </Slider.Root>
  </div>
</Story>

<Story name="Disabled" asChild>
  <div class="max-w-md rounded-lg border-2 border-border bg-surface p-6">
    <Slider.Root type="single" value={55} disabled>
      <Slider.Range />
      <Slider.Thumb index={0} aria-label="Disabled value" />
    </Slider.Root>
  </div>
</Story>
