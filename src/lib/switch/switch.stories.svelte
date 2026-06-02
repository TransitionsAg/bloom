<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Switch } from "../index.ts"

  const { Story } = defineMeta({
    title: "Switch",
    component: Switch.Root,
    render: template,
    args: {
      checked: false,
      disabled: false,
    },
    argTypes: {
      checked: {
        control: "boolean",
      },
      disabled: {
        control: "boolean",
      },
      required: {
        control: "boolean",
      },
    },
  })

  type SwitchStoryArgs = {
    checked?: boolean
    disabled?: boolean
    required?: boolean
    name?: string
    value?: string
  }
</script>

{#snippet template(args: SwitchStoryArgs)}
  <Switch.Root {...args}>
    <Switch.Thumb />
  </Switch.Root>
{/snippet}

{#snippet row(id: string, label: string, description: string, props: SwitchStoryArgs = {})}
  <div class="flex items-start gap-3">
    <Switch.Root {id} aria-labelledby={`${id}-label`} {...props}>
      <Switch.Thumb />
    </Switch.Root>
    <label for={id} class="grid gap-1 text-sm font-medium leading-none text-foreground">
      <span id={`${id}-label`} class="font-semibold">{label}</span>
      <span class="text-muted-foreground">{description}</span>
    </label>
  </div>
{/snippet}

<Story name="Default" args={{ checked: true }} />

<Story name="Settings" asChild>
  <div class="grid max-w-lg gap-4 rounded-lg border-2 border-border bg-surface p-6">
    {@render row("switch-notifications", "Product notifications", "Receive release notes and workspace activity.", { checked: true, name: "notifications" })}
    {@render row("switch-digest", "Weekly digest", "Send a concise summary every Monday morning.")}
    {@render row("switch-security", "Security alerts", "Important account and access notifications stay enabled.", { checked: true, disabled: true })}
  </div>
</Story>

<Story name="States" asChild>
  <div class="flex flex-wrap items-center gap-4 rounded-lg border-2 border-border bg-surface p-6">
    <Switch.Root aria-label="Unchecked">
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root aria-label="Checked" checked>
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root aria-label="Disabled unchecked" disabled>
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root aria-label="Disabled checked" checked disabled>
      <Switch.Thumb />
    </Switch.Root>
  </div>
</Story>

<Story name="Form Value" asChild>
  <form class="grid max-w-lg gap-4 rounded-lg border-2 border-border bg-surface p-6">
    {@render row("switch-marketing", "Marketing opt-in", "Submits a custom value when checked.", { name: "marketing", value: "accepted", required: true })}
  </form>
</Story>
