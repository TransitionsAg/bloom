<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { LinkPreview } from "../index.ts"

  const { Story } = defineMeta({
    title: "Link Preview",
    component: LinkPreview.Root,
  })
</script>

{#snippet PreviewCard()}
  <div class="flex gap-4">
    <div class="flex size-12 shrink-0 items-center justify-center rounded bg-primary text-sm font-extrabold text-primary-foreground">
      BL
    </div>
    <div class="min-w-0 space-y-2">
      <div>
        <h3 class="text-sm font-extrabold tracking-[-0.02em] text-foreground">Bloom changelog</h3>
        <p class="text-sm leading-6 text-muted-foreground">
          New primitives, sharper theme defaults, and examples for building interfaces with Bits UI.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
        <span class="rounded bg-muted px-2 py-1">Design system</span>
        <span class="rounded bg-muted px-2 py-1">Updated today</span>
      </div>
    </div>
  </div>
{/snippet}

<Story name="Default" asChild>
  <div class="max-w-2xl text-sm leading-7 text-foreground">
    Read the latest
    <LinkPreview.Root>
      <LinkPreview.Trigger href="https://transitions.ag" target="_blank" rel="noreferrer noopener">
        Bloom changelog
      </LinkPreview.Trigger>
      <LinkPreview.Content sideOffset={8}>
        {@render PreviewCard()}
        <LinkPreview.Arrow />
      </LinkPreview.Content>
    </LinkPreview.Root>
    before upgrading your components.
  </div>
</Story>

<Story name="Custom Content" asChild>
  <div class="flex flex-col gap-6 text-sm text-foreground">
    <p class="max-w-xl leading-7">
      Hover the
      <LinkPreview.Root openDelay={150} closeDelay={150}>
        <LinkPreview.Trigger href="https://transitions.ag" target="_blank" rel="noreferrer noopener">
          transition guide
        </LinkPreview.Trigger>
        <LinkPreview.Content side="right" sideOffset={12} class="w-[min(18rem,calc(100vw-2rem))]">
          <div class="space-y-3">
            <div class="rounded bg-muted p-3">
              <svg viewBox="0 0 120 64" fill="none" aria-hidden="true" class="h-24 w-full text-primary">
                <path d="M8 48C28 14 44 14 60 40s32 26 52-8" stroke="currentColor" stroke-width="8" stroke-linecap="round" />
                <circle cx="60" cy="40" r="7" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-extrabold tracking-[-0.02em]">Transition guide</h3>
              <p class="mt-1 text-sm leading-6 text-muted-foreground">
                Practical notes for mapping interaction states to Bloom primitives.
              </p>
            </div>
          </div>
          <LinkPreview.Arrow />
        </LinkPreview.Content>
      </LinkPreview.Root>
      to preview a compact card with custom content classes.
    </p>
  </div>
</Story>
