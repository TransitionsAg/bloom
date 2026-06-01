<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Button, Dialog, Select } from "../index.ts"

  const roleItems = [
    { value: "admin", label: "Admin" },
    { value: "editor", label: "Editor" },
    { value: "viewer", label: "Viewer" },
  ]

  const { Story } = defineMeta({
    title: "Dialog",
    component: Dialog.Root,
  })
</script>

<script lang="ts">
  let selectedRole = $state("editor")
</script>

{#snippet DialogContent()}
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <div class="flex flex-col gap-3">
        <Dialog.Title>Invite collaborator</Dialog.Title>
        <Dialog.Description>
          Send an invitation to a teammate and choose the access level they should receive.
        </Dialog.Description>
      </div>

      <div class="grid gap-4">
        <label class="grid gap-2 text-sm font-semibold text-foreground">
          Email address
          <input
            class="h-12 rounded border-2 border-border bg-field px-4 text-[15px] font-medium text-field-foreground transition-all placeholder:text-caption hover:bg-field-accent focus-visible:border-primary focus-visible:outline-none"
            placeholder="teammate@example.com"
            type="email"
          />
        </label>

        <label class="grid gap-2 text-sm font-semibold text-foreground">
          Role
          <select
            class="h-12 rounded border-2 border-border bg-field px-4 text-[15px] font-medium text-field-foreground transition-all hover:bg-field-accent focus-visible:border-primary focus-visible:outline-none"
          >
            <option>Editor</option>
            <option>Viewer</option>
            <option>Admin</option>
          </select>
        </label>
      </div>

      <div class="flex w-full flex-col-reverse items-center justify-end gap-2 sm:flex-row">
        <Dialog.Close class="h-12 w-full bg-secondary px-[21px] text-[15px] font-semibold text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent sm:w-auto">
          Cancel
        </Dialog.Close>
        <Dialog.Close class="h-12 w-full bg-primary px-[21px] text-[15px] font-semibold text-primary-foreground hover:bg-primary-accent sm:w-auto">
          Send invite
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
{/snippet}

<Story name="Default" asChild>
  <Dialog.Root>
    <Dialog.Trigger>Open dialog</Dialog.Trigger>
    {@render DialogContent()}
  </Dialog.Root>
</Story>

<Story name="Nested" asChild>
  <Dialog.Root>
    <Dialog.Trigger intent="secondary">Open nested example</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <div class="flex flex-col gap-3">
          <Dialog.Title>Project settings</Dialog.Title>
          <Dialog.Description>
            Nested dialogs use the Bits UI nesting attributes while keeping Bloom modal styling.
          </Dialog.Description>
        </div>

        <Dialog.Root>
          <Dialog.Trigger>Open confirmation</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content class="sm:max-w-md">
              <div class="flex flex-col gap-3">
                <Dialog.Title>Apply changes?</Dialog.Title>
                <Dialog.Description>
                  Confirm that these settings should be applied to this project.
                </Dialog.Description>
              </div>

              <div class="flex w-full flex-col-reverse items-center justify-end gap-2 sm:flex-row">
                <Dialog.Close class="h-12 w-full bg-secondary px-[21px] text-[15px] font-semibold text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent sm:w-auto">
                  Back
                </Dialog.Close>
                <Dialog.Close class="h-12 w-full bg-primary px-[21px] text-[15px] font-semibold text-primary-foreground hover:bg-primary-accent sm:w-auto">
                  Apply
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</Story>

<Story name="WithForm" asChild>
  <Dialog.Root>
    <Dialog.Trigger>Edit profile</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <div class="flex flex-col gap-3">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
        </div>

        <div class="grid gap-4 py-4">
          <Select.Root type="single" items={roleItems} value={selectedRole}>
            <Select.Trigger aria-label="Select a role">
              <Select.Value placeholder="Select a role" />
              <span class="ml-auto">
                <svg
                  class="size-5 text-muted-foreground"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path d="m6 8 4 4 4-4" />
                </svg>
              </span>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content sideOffset={8}>
                <Select.Viewport>
                  {#each roleItems as item (item.value)}
                    <Select.Item value={item.value} label={item.label}>
                      {#snippet children({ selected })}
                        <span>{item.label}</span>
                        {#if selected}
                          <span class="ml-auto text-primary">
                            <svg
                              class="size-4"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              aria-hidden="true"
                            >
                              <path d="m4 10 4 4 8-8" />
                            </svg>
                          </span>
                        {/if}
                      {/snippet}
                    </Select.Item>
                  {/each}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div class="flex w-full flex-col-reverse items-center justify-end gap-2 sm:flex-row">
          <Dialog.Close class="h-12 w-full bg-secondary px-[21px] text-[15px] font-semibold text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent sm:w-auto">
            Cancel
          </Dialog.Close>
          <Button.Root>Save changes</Button.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</Story>
