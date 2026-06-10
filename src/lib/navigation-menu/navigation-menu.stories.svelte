<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { NavigationMenu } from "../index.ts"

  const products = [
    {
      href: "/soil-map",
      title: "Soil map",
      description: "Compare field potential, risk, and transition opportunities in one view.",
    },
    {
      href: "/planning",
      title: "Planning",
      description: "Build crop rotations and budget scenarios with your advisory team.",
    },
    {
      href: "/monitoring",
      title: "Monitoring",
      description: "Track practices, evidence, and outcomes through the season.",
    },
    {
      href: "/reports",
      title: "Reports",
      description: "Export clear summaries for partners, buyers, and finance teams.",
    },
  ]

  const resources = [
    {
      href: "/library",
      title: "Knowledge library",
      description: "Guides and examples for transition projects.",
    },
    {
      href: "/cases",
      title: "Case studies",
      description: "Practical stories from farms and supply chains.",
    },
    { href: "/support", title: "Support", description: "Get help from the Bloom advisory team." },
  ]

  type NavigationItem = {
    href: string
    title: string
    description: string
  }

  const { Story } = defineMeta({
    title: "Navigation Menu",
    component: NavigationMenu.Root,
  })
</script>

{#snippet Chevron()}
  <svg
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
{/snippet}

{#snippet MenuLink(item: NavigationItem)}
  <li>
    <NavigationMenu.Link href={item.href} class="flex w-full flex-col items-start gap-1 rounded p-3 text-left hover:bg-muted">
      <span class="typo-sm text-foreground">{item.title}</span>
      <span class="text-sm font-medium leading-snug text-muted-foreground">{item.description}</span>
    </NavigationMenu.Link>
  </li>
{/snippet}

<Story name="Default" asChild>
  <div class="flex min-h-72 w-full items-start justify-center p-6">
    <NavigationMenu.Root class="w-full max-w-4xl justify-center">
      <NavigationMenu.List>
        <NavigationMenu.Item value="products">
          <NavigationMenu.Trigger>
            Products
            {@render Chevron()}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul class="grid w-[min(calc(100vw-3rem),42rem)] list-none gap-2 p-3 sm:grid-cols-[0.9fr_1.1fr]">
              <li class="row-span-2">
                <NavigationMenu.Link
                  href="/platform"
                  class="flex h-full min-h-44 w-full flex-col items-start justify-end gap-3 rounded-lg border-2 border-border bg-secondary p-5 hover:bg-secondary-accent"
                >
                  <span
                    class="inline-flex size-10 items-center justify-center rounded bg-primary text-lg font-extrabold text-primary-foreground"
                  >B</span>
                  <span class="grid gap-1">
                    <span class="text-lg font-extrabold text-foreground">Bloom platform</span>
                    <span class="text-sm font-medium leading-snug text-muted-foreground">
                      Coordinate regenerative transition work from first assessment to verified outcomes.
                    </span>
                  </span>
                </NavigationMenu.Link>
              </li>
              {#each products as product (product.href)}
                {@render MenuLink(product)}
              {/each}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="resources">
          <NavigationMenu.Trigger>
            Resources
            {@render Chevron()}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul class="grid w-[min(calc(100vw-3rem),28rem)] list-none gap-2 p-3">
              {#each resources as resource (resource.href)}
                {@render MenuLink(resource)}
              {/each}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/pricing" class="h-10 px-4 py-2">Pricing</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <div class="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu.Root>
  </div>
</Story>

<Story name="Vertical" asChild>
  <div class="flex min-h-72 w-full p-6">
    <NavigationMenu.Root orientation="vertical" class="items-start">
      <NavigationMenu.List>
        <NavigationMenu.Item value="field-team">
          <NavigationMenu.Trigger>
            Field team
            {@render Chevron()}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content class="left-full top-0 ml-3">
            <ul class="grid w-72 list-none gap-2 p-3">
              {@render MenuLink({
                href: "/field-visits",
                title: "Field visits",
                description: "Plan visits and capture recommendations.",
              })}
              {@render MenuLink({
                href: "/growers",
                title: "Growers",
                description: "Manage farms, contacts, and commitments.",
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/settings" class="h-10 px-4 py-2">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </div>
</Story>
