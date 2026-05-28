<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Checkbox } from "../index.ts"

  const { Story } = defineMeta({
    title: "Checkbox",
    component: Checkbox.Root,
  })
</script>

{#snippet row(id: string, label: string, description: string, props: Record<string, unknown> = {})}
  <div class="flex items-start gap-3">
    <Checkbox.Root {id} aria-labelledby={`${id}-label`} {...props} />
    <label for={id} class="grid gap-1 text-sm leading-none text-foreground">
      <span id={`${id}-label`} class="font-semibold">{label}</span>
      <span class="text-muted-foreground">{description}</span>
    </label>
  </div>
{/snippet}

<Story name="Default" asChild>
  <div class="grid max-w-lg gap-4 rounded-lg border-2 border-border bg-surface p-6">
    {@render row("checkbox-updates", "Product updates", "Receive release notes and product announcements.")}
    {@render row("checkbox-terms", "Accept terms", "Required before continuing to checkout.", { checked: true, required: true })}
    {@render row("checkbox-partial", "Team permissions", "Some nested permissions are currently selected.", { indeterminate: true })}
    {@render row("checkbox-disabled", "Archived workspace", "This setting is locked for archived workspaces.", { disabled: true })}
  </div>
</Story>

<Story name="Group" asChild>
  <Checkbox.Group value={["email", "security"]} name="notifications" class="max-w-lg rounded-lg border-2 border-border bg-surface p-6">
    <Checkbox.GroupLabel>Notification preferences</Checkbox.GroupLabel>
    <div class="grid gap-4">
      {@render row("checkbox-email", "Email digest", "A weekly summary of workspace activity.", { value: "email" })}
      {@render row("checkbox-security", "Security alerts", "Important account and access notifications.", { value: "security" })}
      {@render row("checkbox-billing", "Billing updates", "Invoices, failed payments, and plan changes.", { value: "billing" })}
    </div>
  </Checkbox.Group>
</Story>

<Story name="Custom Indicator" asChild>
  <div class="flex items-center gap-3 rounded-lg border-2 border-border bg-surface p-6">
    <Checkbox.Root id="checkbox-custom" checked class="size-6 rounded-full">
      {#snippet children({ checked })}
        {#if checked}
          <svg class="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 1.5 9.7 6l4.8.2-3.8 3 1.3 4.6L8 11.2l-4 2.6 1.3-4.6-3.8-3L6.3 6 8 1.5Z" />
          </svg>
        {/if}
      {/snippet}
    </Checkbox.Root>
    <label for="checkbox-custom" class="text-sm font-semibold text-foreground">Use a custom inline SVG indicator</label>
  </div>
</Story>
