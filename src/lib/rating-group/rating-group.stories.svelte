<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"
  import { Star } from "phosphor-svelte"

  import { RatingGroup } from "../index.ts"

  const { Story } = defineMeta({
    title: "Rating Group",
    component: RatingGroup.Root,
  })
</script>

{#snippet starIcon(state: "active" | "partial" | "inactive")}
  <Star class="size-full" weight={state === "active" || state === "partial" ? "fill" : "bold"} />
{/snippet}

{#snippet ratingItems(items: { index: number; state: "active" | "partial" | "inactive" }[])}
  {#each items as item (item.index)}
    <RatingGroup.Item index={item.index}>
      {@render starIcon(item.state)}
    </RatingGroup.Item>
  {/each}
{/snippet}

<Story name="Default" asChild>
  <RatingGroup.Root value={3} max={5}>
    {#snippet children({ items })}
      {@render ratingItems(items)}
    {/snippet}
  </RatingGroup.Root>
</Story>

<Story name="Half Rating" asChild>
  <RatingGroup.Root value={3.5} max={5} allowHalf>
    {#snippet children({ items })}
      {@render ratingItems(items)}
    {/snippet}
  </RatingGroup.Root>
</Story>

<Story name="Readonly" asChild>
  <RatingGroup.Root value={4} max={5} readonly>
    {#snippet children({ items })}
      {@render ratingItems(items)}
    {/snippet}
  </RatingGroup.Root>
</Story>

<Story name="Disabled" asChild>
  <RatingGroup.Root value={2} max={5} disabled>
    {#snippet children({ items })}
      {@render ratingItems(items)}
    {/snippet}
  </RatingGroup.Root>
</Story>

<Story name="Vertical" asChild>
  <RatingGroup.Root value={3} max={5} orientation="vertical" class="gap-2">
    {#snippet children({ items })}
      {@render ratingItems(items)}
    {/snippet}
  </RatingGroup.Root>
</Story>
