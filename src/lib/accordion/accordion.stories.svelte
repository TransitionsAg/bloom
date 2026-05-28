<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Accordion } from "../index.ts"

  const items = [
    {
      value: "meaning",
      title: "What is the meaning of life?",
      content:
        "To become a better person, to help others, and to leave the world a better place than you found it.",
    },
    {
      value: "better",
      title: "How do I become a better person?",
      content: "Read books, listen to podcasts, and surround yourself with people who inspire you.",
    },
    {
      value: "help",
      title: "What is the best way to help others?",
      content: "Give them your time, attention, and love.",
    },
  ]

  const { Story } = defineMeta({
    title: "Accordion",
    component: Accordion.Root,
  })
</script>

{#snippet indicator()}
  <span class="inline-flex size-8 items-center justify-center rounded bg-transparent transition-all hover:bg-muted-accent">
    <svg
      class="size-[18px]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  </span>
{/snippet}

<Story name="Default" asChild>
  <Accordion.Root type="single" value="meaning" class="max-w-2xl">
    {#each items as item (item.value)}
      <Accordion.Item value={item.value}>
        <Accordion.Header>
          <Accordion.Trigger>
            <span>{item.title}</span>
            {@render indicator()}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</Story>

<Story name="Multiple" asChild>
  <Accordion.Root type="multiple" value={["meaning", "help"]} class="max-w-2xl">
    {#each items as item (item.value)}
      <Accordion.Item value={item.value}>
        <Accordion.Header>
          <Accordion.Trigger>
            <span>{item.title}</span>
            {@render indicator()}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</Story>

<Story name="Transparent" asChild>
  <Accordion.Root type="single" variant="transparent" value="better" class="max-w-2xl">
    {#each items as item (item.value)}
      <Accordion.Item value={item.value}>
        <Accordion.Header>
          <Accordion.Trigger>
            <span>{item.title}</span>
            {@render indicator()}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</Story>

<Story name="Disabled Item" asChild>
  <Accordion.Root type="single" value="meaning" class="max-w-2xl">
    {#each items as item, index (item.value)}
      <Accordion.Item value={item.value} disabled={index === 1}>
        <Accordion.Header>
          <Accordion.Trigger>
            <span>{item.title}</span>
            {@render indicator()}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{item.content}</Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</Story>
