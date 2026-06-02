<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { AspectRatio } from "../index.ts"

  const { Story } = defineMeta({
    title: "Aspect Ratio",
    component: AspectRatio.Root,
    render: template,
    args: {
      ratio: 16 / 9,
    },
    argTypes: {
      ratio: {
        control: "number",
      },
    },
  })

  type AspectRatioStoryArgs = {
    ratio?: number
  }
</script>

{#snippet template(args: AspectRatioStoryArgs)}
  <div class="w-full max-w-3xl">
    <AspectRatio.Root {...args}>
      <div class="flex h-full w-full flex-col justify-between bg-gradient-to-br from-primary via-secondary to-muted p-6 text-primary-foreground">
        <div class="flex items-center justify-between gap-4 typo-sm uppercase tracking-[0.18em]">
          <span>Bloom Field Notes</span>
          <span>16:9</span>
        </div>
        <div class="max-w-md space-y-3">
          <p class="text-3xl font-semibold leading-none sm:text-5xl">Aspect-safe media frame</p>
          <p class="text-sm font-medium text-primary-foreground/80 sm:text-base">
            Content keeps its proportions while the wrapper carries Bloom surface, border, and
            radius styling.
          </p>
        </div>
      </div>
    </AspectRatio.Root>
  </div>
{/snippet}

<Story name="Default" />

<Story name="Ratios" asChild>
  <div class="grid w-full max-w-5xl gap-6 md:grid-cols-3">
    <div class="space-y-2">
      <AspectRatio.Root ratio={1}>
        <div class="grid h-full w-full place-items-center bg-muted text-muted-foreground">
          <span class="text-lg font-semibold">1:1</span>
        </div>
      </AspectRatio.Root>
      <p class="text-sm font-medium text-muted-foreground">Square preview</p>
    </div>
    <div class="space-y-2">
      <AspectRatio.Root ratio={4 / 3}>
        <div class="grid h-full w-full place-items-center bg-secondary text-secondary-foreground">
          <span class="text-lg font-semibold">4:3</span>
        </div>
      </AspectRatio.Root>
      <p class="text-sm font-medium text-muted-foreground">Editorial card</p>
    </div>
    <div class="space-y-2">
      <AspectRatio.Root ratio={16 / 9}>
        <div class="grid h-full w-full place-items-center bg-primary text-primary-foreground">
          <span class="text-lg font-semibold">16:9</span>
        </div>
      </AspectRatio.Root>
      <p class="text-sm font-medium text-muted-foreground">Wide media</p>
    </div>
  </div>
</Story>

<Story name="Image Placeholder" asChild>
  <AspectRatio.Root ratio={14 / 9} class="max-w-3xl">
    <div class="relative h-full w-full overflow-hidden bg-surface">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-surface to-secondary"></div>
      <div class="absolute inset-x-8 bottom-8 rounded-lg bg-background/80 p-5 text-foreground inset-ring-2 inset-ring-border">
        <p class="typo-sm uppercase tracking-[0.18em] text-muted-foreground">
          Placeholder
        </p>
        <p class="mt-2 text-2xl font-semibold">No network image required</p>
      </div>
    </div>
  </AspectRatio.Root>
</Story>
