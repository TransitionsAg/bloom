<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Meter } from "../index.ts"

  const { Story } = defineMeta({
    title: "Meter",
    component: Meter.Root,
    render: template,
    args: {
      value: 64,
      min: 0,
      max: 100,
      "aria-label": "Storage used",
    },
    argTypes: {
      value: {
        control: "number",
      },
      min: {
        control: "number",
      },
      max: {
        control: "number",
      },
    },
  })

  type MeterStoryArgs = {
    value?: number
    min?: number
    max?: number
    "aria-label"?: string
  }
</script>

{#snippet template(args: MeterStoryArgs)}
  <div class="flex w-full max-w-md flex-col gap-2">
    <div class="flex items-center justify-between text-sm font-semibold text-foreground">
      <span>Storage used</span>
      <span class="tabular-nums text-muted-foreground">{args.value} / {args.max}</span>
    </div>
    <Meter.Root {...args} />
  </div>
{/snippet}

<Story name="Default" />

<Story name="Low" args={{ value: 24, "aria-label": "Battery level" }} />

<Story name="Full" args={{ value: 100, "aria-label": "Memory used" }} />

<Story name="Custom Indicator" asChild>
  <div class="flex w-full max-w-md flex-col gap-2">
    <div class="flex items-center justify-between text-sm font-semibold text-foreground">
      <span>CPU load</span>
      <span class="tabular-nums text-muted-foreground">42%</span>
    </div>
    <Meter.Root value={42} aria-label="CPU load">
      <div
        class="h-full w-full rounded-full bg-tertiary transition-transform duration-300 ease-out"
        style="transform: translateX(-58%)"
      ></div>
    </Meter.Root>
  </div>
</Story>
