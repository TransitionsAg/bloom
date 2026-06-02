<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";

  import { Pagination } from "../index.ts";

  const { Story } = defineMeta({
    title: "Pagination",
    component: Pagination.Root,
  });
</script>

{#snippet previousIcon()}
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m12.5 15-5-5 5-5" />
  </svg>
{/snippet}

{#snippet nextIcon()}
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d="m7.5 5 5 5-5 5" />
  </svg>
{/snippet}

{#snippet PageList(
  pages: (
    | { type: "page"; value: number; key: string }
    | { type: "ellipsis"; key: string }
  )[],
)}
  <Pagination.Pages>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <span
          class="inline-flex size-10 select-none items-center justify-center typo-sm text-muted-foreground"
          >...</span
        >
      {:else}
        <Pagination.Page {page}>{page.value}</Pagination.Page>
      {/if}
    {/each}
  </Pagination.Pages>
{/snippet}

<Story name="Default" asChild>
  <Pagination.Root count={100} perPage={10} page={4}>
    {#snippet children({ pages })}
      <Pagination.PrevButton aria-label="Previous page"
        >{@render previousIcon()}</Pagination.PrevButton
      >
      {@render PageList(pages)}
      <Pagination.NextButton aria-label="Next page"
        >{@render nextIcon()}</Pagination.NextButton
      >
    {/snippet}
  </Pagination.Root>
</Story>

<Story name="Compact" asChild>
  <Pagination.Root count={64} perPage={8} page={1} siblingCount={0}>
    {#snippet children({ pages, range })}
      <div class="flex items-center gap-2">
        <Pagination.PrevButton aria-label="Previous page"
          >{@render previousIcon()}</Pagination.PrevButton
        >
        {@render PageList(pages)}
        <Pagination.NextButton aria-label="Next page"
          >{@render nextIcon()}</Pagination.NextButton
        >
      </div>
      <p class="text-sm font-medium text-muted-foreground">
        Showing {range.start}-{range.end} of 64
      </p>
    {/snippet}
  </Pagination.Root>
</Story>

<Story name="Custom Classes" asChild>
  <Pagination.Root
    count={45}
    perPage={5}
    page={5}
    class="rounded-lg border-2 border-border bg-background p-4"
  >
    {#snippet children({ pages })}
      <div class="flex flex-wrap items-center gap-2">
        <Pagination.PrevButton class="bg-transparent" aria-label="Previous page"
          >{@render previousIcon()}</Pagination.PrevButton
        >
        <div class="flex items-center gap-1">
          {#each pages as page (page.key)}
            {#if page.type === "ellipsis"}
              <span class="px-2 text-muted-foreground">...</span>
            {:else}
              <Pagination.Page {page} class="rounded-full"
                >{page.value}</Pagination.Page
              >
            {/if}
          {/each}
        </div>
        <Pagination.NextButton class="bg-transparent" aria-label="Next page"
          >{@render nextIcon()}</Pagination.NextButton
        >
      </div>
    {/snippet}
  </Pagination.Root>
</Story>
