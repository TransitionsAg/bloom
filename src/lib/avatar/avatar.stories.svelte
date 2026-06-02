<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Avatar } from "../index.ts"

  const adaAvatar =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23f4f4f5'/%3E%3Ccircle cx='48' cy='36' r='18' fill='%2318171c'/%3E%3Cpath d='M18 88c4-22 17-34 30-34s26 12 30 34' fill='%2318171c'/%3E%3Cpath d='M28 18c10-9 30-12 42 1-3 12-11 19-24 19-7 0-13-2-18-6z' fill='%23d4d4d8'/%3E%3C/svg%3E"

  const noorAvatar =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23e4e4e7'/%3E%3Ccircle cx='48' cy='48' r='30' fill='%2318171c'/%3E%3Cpath d='M22 53c15-1 28-10 38-25 9 8 14 18 14 31 0 7-2 13-5 18H27a36 36 0 0 1-5-24z' fill='%23fafafa'/%3E%3Ccircle cx='38' cy='54' r='4' fill='%2318171c'/%3E%3Ccircle cx='58' cy='54' r='4' fill='%2318171c'/%3E%3Cpath d='M38 68c6 5 14 5 20 0' stroke='%2318171c' stroke-width='4' stroke-linecap='round' fill='none'/%3E%3C/svg%3E"

  const { Story } = defineMeta({
    title: "Avatar",
    component: Avatar.Root,
  })
</script>

{#snippet UserAvatar(src: string, alt: string, fallback: string)}
  <Avatar.Root delayMs={200}>
    <Avatar.Image {src} {alt} />
    <Avatar.Fallback>{fallback}</Avatar.Fallback>
  </Avatar.Root>
{/snippet}

{#snippet Sparkle()}
  <svg viewBox="0 0 24 24" class="size-5" aria-hidden="true">
    <path
      d="M12 2l1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2zM18 14l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9L18 14z"
      fill="currentColor"
    />
  </svg>
{/snippet}

<Story name="Image" asChild>
  {@render UserAvatar(adaAvatar, "Ada Lovelace avatar", "AL")}
</Story>

<Story name="Fallback" asChild>
  <Avatar.Root>
    <Avatar.Image src="/missing-avatar.png" alt="Missing avatar" />
    <Avatar.Fallback>TA</Avatar.Fallback>
  </Avatar.Root>
</Story>

<Story name="Group" asChild>
  <div class="flex items-center -space-x-2">
    <Avatar.Root class="ring-2 ring-background">
      <Avatar.Image src={adaAvatar} alt="Ada Lovelace avatar" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root class="ring-2 ring-background">
      <Avatar.Image src={noorAvatar} alt="Noor Khan avatar" />
      <Avatar.Fallback>NK</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root class="ring-2 ring-background">
      <Avatar.Image src="/missing-avatar-2.png" alt="Morgan avatar" />
      <Avatar.Fallback>MO</Avatar.Fallback>
    </Avatar.Root>
  </div>
</Story>

<Story name="Sizes" asChild>
  <div class="flex items-center gap-4">
    <Avatar.Root class="size-8 text-xs font-semibold">
      <Avatar.Image src={adaAvatar} alt="Ada Lovelace avatar" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image src={adaAvatar} alt="Ada Lovelace avatar" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root class="size-14 text-base font-semibold">
      <Avatar.Image src={adaAvatar} alt="Ada Lovelace avatar" />
      <Avatar.Fallback>AL</Avatar.Fallback>
    </Avatar.Root>
  </div>
</Story>

<Story name="Custom Fallback" asChild>
  <Avatar.Root class="size-12 bg-primary text-primary-foreground">
    <Avatar.Image src="/missing-avatar-icon.png" alt="Workspace avatar" />
    <Avatar.Fallback class="bg-primary text-primary-foreground">
      {@render Sparkle()}
    </Avatar.Fallback>
  </Avatar.Root>
</Story>
