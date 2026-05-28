<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { AlertDialog } from "../index.ts"

  const { Story } = defineMeta({
    title: "Alert Dialog",
    component: AlertDialog.Root,
  })
</script>

{#snippet DialogContent()}
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <div class="flex flex-col gap-4">
        <AlertDialog.Title>Confirm your transaction</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will initiate a monthly wire in the amount of $10,000.
          Do you wish to continue?
        </AlertDialog.Description>
      </div>
      <div class="flex w-full flex-col-reverse items-center justify-center gap-2 sm:flex-row">
        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Continue</AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
{/snippet}

<Story name="Default" asChild>
  <AlertDialog.Root>
    <AlertDialog.Trigger>Subscribe</AlertDialog.Trigger>
    {@render DialogContent()}
  </AlertDialog.Root>
</Story>

<Story name="Destructive" asChild>
  <AlertDialog.Root>
    <AlertDialog.Trigger intent="destructive">Delete account</AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <div class="flex flex-col gap-4">
          <AlertDialog.Title>Delete your account?</AlertDialog.Title>
          <AlertDialog.Description>
            This permanently removes your account and all associated data. This action cannot be
            undone.
          </AlertDialog.Description>
        </div>
        <div class="flex w-full flex-col-reverse items-center justify-center gap-2 sm:flex-row">
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action intent="destructive">Delete account</AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
</Story>
