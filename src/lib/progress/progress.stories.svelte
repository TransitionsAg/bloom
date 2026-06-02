<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Progress } from "../index.ts"

  const { Story } = defineMeta({
    title: "Progress",
    component: Progress.Root,
    render: template,
    args: {
      value: 66,
      max: 100,
      size: "md",
      "aria-label": "Upload progress",
    },
    argTypes: {
      value: {
        control: "number",
      },
      max: {
        control: "number",
      },
      size: {
        control: "select",
        options: ["sm", "md", "lg"],
      },
    },
  })

  type ProgressStoryArgs = {
    value?: number | null
    max?: number
    size?: "sm" | "md" | "lg"
    "aria-label"?: string
  }
</script>

{#snippet template(args: ProgressStoryArgs)}
  <Progress.Root {...args} />
{/snippet}

<Story name="Default" args={{ value: 66 }} />

<Story name="Sizes" asChild>
  <div class="flex w-full max-w-xl flex-col gap-4">
    <Progress.Root value={28} size="sm" aria-label="Small progress" />
    <Progress.Root value={52} size="md" aria-label="Medium progress" />
    <Progress.Root value={76} size="lg" aria-label="Large progress" />
  </div>
</Story>

<Story name="Labeled" asChild>
  <div class="flex w-full max-w-xl flex-col gap-3">
    <div class="flex items-center justify-between typo-sm text-foreground">
      <span id="progress-upload-label">Uploading archive</span>
      <span class="tabular-nums text-muted-foreground">42%</span>
    </div>
    <Progress.Root aria-labelledby="progress-upload-label" value={42} />
  </div>
</Story>

<Story name="Custom Indicator" asChild>
  <Progress.Root value={58} aria-label="Custom progress" class="h-5 bg-secondary">
    <div class="h-full rounded-full bg-destructive transition-transform duration-300 ease-out" style="transform: translateX(-42%)"></div>
  </Progress.Root>
</Story>

<Story name="Indeterminate" asChild>
  <Progress.Root value={null} aria-label="Waiting for server response" class="opacity-70" />
</Story>
