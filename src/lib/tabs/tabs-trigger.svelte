<script lang="ts" module>
  import { Tabs } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex min-h-10 flex-1 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 py-2 typo-sm text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98] data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:hover:bg-primary-accent data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
  })

  export type Props = ComponentProps<typeof Tabs.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Tabs.Trigger {...restProps} class={variants({ class: className })} />
