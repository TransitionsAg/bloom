<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Separator } from "../index.ts"

  const { Story } = defineMeta({
    title: "Separator",
    component: Separator.Root,
    render: template,
    args: {
      orientation: "horizontal",
      decorative: false,
    },
    argTypes: {
      orientation: {
        control: "select",
        options: ["horizontal", "vertical"],
      },
      decorative: {
        control: "boolean",
      },
    },
  })

  type SeparatorStoryArgs = {
    orientation?: "horizontal" | "vertical"
    decorative?: boolean
    class?: string
  }
</script>

{#snippet template(args: SeparatorStoryArgs)}
  <div class={args.orientation === "vertical" ? "h-24" : "w-full max-w-xl"}>
    <Separator.Root {...args} />
  </div>
{/snippet}

<Story name="Horizontal" args={{ orientation: "horizontal" }} />

<Story name="Vertical" args={{ orientation: "vertical" }} />

<Story name="Content Sections" asChild>
  <div class="max-w-xl rounded-lg border-2 border-border bg-surface p-6 text-foreground">
    <div class="space-y-1">
      <h3 class="text-lg font-semibold tracking-[-0.02em]">Quarterly transition plan</h3>
      <p class="text-sm font-medium text-muted-foreground">
        Separate dense content without adding another container treatment.
      </p>
    </div>
    <Separator.Root class="my-5" />
    <div class="grid gap-3 text-sm font-medium">
      <div class="flex items-center justify-between gap-4">
        <span class="font-medium">Baseline assessment</span>
        <span class="text-muted-foreground">Complete</span>
      </div>
      <div class="flex items-center justify-between gap-4">
        <span class="font-medium">Stakeholder review</span>
        <span class="text-muted-foreground">In progress</span>
      </div>
    </div>
  </div>
</Story>

<Story name="Inline Navigation" asChild>
  <div class="flex h-8 items-center gap-4 text-sm font-medium text-foreground">
    <a class="font-medium underline-offset-4 hover:underline" href="/">Overview</a>
    <Separator.Root orientation="vertical" />
    <a class="font-medium underline-offset-4 hover:underline" href="/">Docs</a>
    <Separator.Root orientation="vertical" />
    <a class="font-medium underline-offset-4 hover:underline" href="/">Source</a>
  </div>
</Story>
