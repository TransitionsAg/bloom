<script lang="ts" module>
  import { Accordion } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full flex-1 cursor-pointer select-none items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-semibold text-foreground transition-all hover:text-primary-accent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 [&[data-state=open]>span>svg]:rotate-180 [&_svg]:transition-transform [&_svg]:duration-200",
  })

  export type Props = ComponentProps<typeof Accordion.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Accordion.Trigger {...restProps} class={variants({ class: className })} />
