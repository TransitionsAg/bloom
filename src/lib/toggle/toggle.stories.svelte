<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Toggle } from "../index.ts"

  const { Story } = defineMeta({
    title: "Toggle",
    component: Toggle.Root,
    args: {
      pressed: false,
      disabled: false,
    },
    argTypes: {
      pressed: {
        control: "boolean",
      },
      disabled: {
        control: "boolean",
      },
    },
  })

</script>

{#snippet icon(path: string)}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
{/snippet}

<Story name="Default" asChild>
  <Toggle.Root pressed={true}>
    {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
    Bold
  </Toggle.Root>
</Story>

<Story name="Icon Only" asChild>
  <Toggle.Root pressed={true} aria-label="Toggle bold">
    {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
  </Toggle.Root>
</Story>

<Story name="States" asChild>
  <div class="flex flex-wrap items-center gap-4 rounded-lg border-2 border-border bg-surface p-6">
    <Toggle.Root pressed={false} aria-label="Bold off">
      {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
      Bold
    </Toggle.Root>
    <Toggle.Root pressed={true} aria-label="Bold on">
      {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
      Bold
    </Toggle.Root>
    <Toggle.Root disabled aria-label="Bold disabled">
      {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
      Bold
    </Toggle.Root>
    <Toggle.Root pressed={true} disabled aria-label="Bold on disabled">
      {@render icon("M7 5h5a3 3 0 0 1 0 6H7zm0 6h6a3 3 0 0 1 0 6H7z")}
      Bold
    </Toggle.Root>
  </div>
</Story>

<Story name="With Label" asChild>
  <div class="flex items-start gap-3">
    <Toggle.Root id="toggle-email" aria-labelledby="toggle-email-label">
      {@render icon("M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z")}
    </Toggle.Root>
    <label for="toggle-email" class="grid gap-1 text-sm font-medium leading-none text-foreground">
      <span id="toggle-email-label" class="font-semibold">Email notifications</span>
      <span class="text-muted-foreground">Receive updates via email.</span>
    </label>
  </div>
</Story>
