<script lang="ts">
  import { cva } from "cva"

  import type { SlashItem } from "./slash-command.ts"

  let { command }: { command: (item: SlashItem) => void } = $props()

  let items = $state<SlashItem[]>([])
  let selectedIndex = $state(0)

  const container = cva({
    base: "z-50 flex max-h-72 w-64 flex-col gap-0.5 overflow-y-auto rounded-lg border-2 border-border bg-surface p-1 shadow-lg outline-none",
  })

  const option = cva({
    base: "flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left transition-colors",
    variants: {
      active: {
        true: "bg-muted-accent",
        false: "",
      },
    },
    defaultVariants: { active: false },
  })

  /** Called by the suggestion renderer whenever the filtered item list changes. */
  export function update(newItems: SlashItem[]) {
    items = newItems
    if (selectedIndex > items.length - 1) selectedIndex = 0
  }

  /** Returns true if the key was handled (so the editor should not also act on it). */
  export function onKeyDown(event: KeyboardEvent): boolean {
    if (items.length === 0) return false
    if (event.key === "ArrowUp") {
      selectedIndex = (selectedIndex + items.length - 1) % items.length
      return true
    }
    if (event.key === "ArrowDown") {
      selectedIndex = (selectedIndex + 1) % items.length
      return true
    }
    if (event.key === "Enter") {
      select(selectedIndex)
      return true
    }
    return false
  }

  function select(index: number) {
    const item = items[index]
    if (item) command(item)
  }
</script>

<div class={container()}>
  {#if items.length === 0}
    <div class="typo-sm px-2 py-1.5 font-medium text-muted-foreground">No results</div>
  {:else}
    {#each items as item, index (item.title)}
      {@const Icon = item.icon}
      <button
        type="button"
        class={option({ active: index === selectedIndex })}
        onmouseenter={() => (selectedIndex = index)}
        onclick={() => select(index)}
      >
        <span
          class="flex size-9 shrink-0 items-center justify-center rounded border-2 border-border bg-surface text-foreground"
        >
          <Icon class="size-4" weight="bold" />
        </span>
        <span class="flex min-w-0 flex-col">
          <span class="typo-sm truncate text-foreground">{item.title}</span>
          <span class="typo-xs truncate font-medium text-muted-foreground">{item.description}</span>
        </span>
      </button>
    {/each}
  {/if}
</div>
