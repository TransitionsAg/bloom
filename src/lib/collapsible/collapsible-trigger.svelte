<script lang="ts" module>
  import { Collapsible } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full cursor-pointer select-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 [[data-variant=transparent]_&]:hover:bg-secondary [&[data-state=open]>span>svg]:rotate-90 [&_svg]:transition-transform [&_svg]:duration-200",
  })

  export type Props = ComponentProps<typeof Collapsible.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Collapsible.Trigger {...restProps} class={variants({ class: className })} />
