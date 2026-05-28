<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { PinInput } from "../index.ts"

  const { Story } = defineMeta({
    title: "Pin Input",
    component: PinInput.Root,
  })
</script>

<Story name="Default" asChild>
  <PinInput.Root maxlength={6}>
    {#snippet children({ cells })}
      {#each cells as cell, index (index)}
        <PinInput.Cell {cell} />
      {/each}
    {/snippet}
  </PinInput.Root>
</Story>

<Story name="Grouped" asChild>
  <PinInput.Root maxlength={6} class="gap-3">
    {#snippet children({ cells })}
      <div class="flex gap-2">
        {#each cells.slice(0, 3) as cell, index (index)}
          <PinInput.Cell {cell} />
        {/each}
      </div>
      <div class="flex w-7 items-center justify-center" aria-hidden="true">
        <div class="h-1 w-3 rounded-full bg-border"></div>
      </div>
      <div class="flex gap-2">
        {#each cells.slice(3, 6) as cell, index (index)}
          <PinInput.Cell {cell} />
        {/each}
      </div>
    {/snippet}
  </PinInput.Root>
</Story>

<Story name="Filled" asChild>
  <PinInput.Root value="284913" maxlength={6}>
    {#snippet children({ cells })}
      {#each cells as cell, index (index)}
        <PinInput.Cell {cell} />
      {/each}
    {/snippet}
  </PinInput.Root>
</Story>

<Story name="Disabled" asChild>
  <PinInput.Root value="1204" maxlength={4} disabled>
    {#snippet children({ cells })}
      {#each cells as cell, index (index)}
        <PinInput.Cell {cell} />
      {/each}
    {/snippet}
  </PinInput.Root>
</Story>
