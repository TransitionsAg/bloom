<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Tabs } from "../index.ts"

  const { Story } = defineMeta({
    title: "Tabs",
    component: Tabs.Root,
  })
</script>

{#snippet accountPanel()}
  <div class="space-y-3">
    <div>
      <h3 class="text-lg font-bold">Account</h3>
      <p class="text-muted-foreground">Manage your profile, email address, and sign-in methods.</p>
    </div>
    <div class="grid gap-2 sm:grid-cols-2">
      <div class="rounded border-2 border-border bg-background p-4">
        <p class="text-sm font-semibold">Plan</p>
        <p class="text-sm text-muted-foreground">Team workspace</p>
      </div>
      <div class="rounded border-2 border-border bg-background p-4">
        <p class="text-sm font-semibold">Status</p>
        <p class="text-sm text-muted-foreground">Active</p>
      </div>
    </div>
  </div>
{/snippet}

{#snippet billingPanel()}
  <div class="space-y-3">
    <div>
      <h3 class="text-lg font-bold">Billing</h3>
      <p class="text-muted-foreground">Review invoices, payment methods, and billing contacts.</p>
    </div>
    <div class="rounded border-2 border-border bg-background p-4">
      <p class="text-sm font-semibold">Next invoice</p>
      <p class="text-sm text-muted-foreground">June 14, 2026 for $84.00</p>
    </div>
  </div>
{/snippet}

{#snippet teamPanel()}
  <div class="space-y-3">
    <div>
      <h3 class="text-lg font-bold">Team</h3>
      <p class="text-muted-foreground">Invite teammates and tune workspace permissions.</p>
    </div>
    <ul class="grid gap-2 text-sm text-muted-foreground">
      <li class="rounded bg-muted px-3 py-2">3 owners</li>
      <li class="rounded bg-muted px-3 py-2">12 editors</li>
      <li class="rounded bg-muted px-3 py-2">28 viewers</li>
    </ul>
  </div>
{/snippet}

{#snippet tabsContent()}
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
    <Tabs.Trigger value="team">Team</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">{@render accountPanel()}</Tabs.Content>
  <Tabs.Content value="billing">{@render billingPanel()}</Tabs.Content>
  <Tabs.Content value="team">{@render teamPanel()}</Tabs.Content>
{/snippet}

<Story name="Default" asChild>
  <Tabs.Root value="account" class="max-w-2xl">
    {@render tabsContent()}
  </Tabs.Root>
</Story>

<Story name="Manual Activation" asChild>
  <Tabs.Root value="billing" activationMode="manual" class="max-w-2xl">
    {@render tabsContent()}
  </Tabs.Root>
</Story>

<Story name="Vertical" asChild>
  <Tabs.Root value="team" orientation="vertical" class="max-w-3xl">
    {@render tabsContent()}
  </Tabs.Root>
</Story>

<Story name="Disabled Trigger" asChild>
  <Tabs.Root value="account" class="max-w-2xl">
    <Tabs.List>
      <Tabs.Trigger value="account">Account</Tabs.Trigger>
      <Tabs.Trigger value="billing" disabled>Billing</Tabs.Trigger>
      <Tabs.Trigger value="team">Team</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="account">{@render accountPanel()}</Tabs.Content>
    <Tabs.Content value="billing">{@render billingPanel()}</Tabs.Content>
    <Tabs.Content value="team">{@render teamPanel()}</Tabs.Content>
  </Tabs.Root>
</Story>
