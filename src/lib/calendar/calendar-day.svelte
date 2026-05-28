<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group relative inline-flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-transparent p-0 text-sm font-medium text-foreground transition-all hover:border-border hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[outside-month]:text-caption data-[outside-month]:opacity-55 data-[selected]:border-primary data-[selected]:bg-primary data-[selected]:text-background data-[today]:border-foreground data-[unavailable]:text-disabled-foreground data-[unavailable]:line-through",
  })

  export type Props = ComponentProps<typeof Calendar.Day>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.Day {...restProps} class={variants({ class: className })} />
