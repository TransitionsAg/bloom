<script lang="ts" module>
  import { Pagination } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex size-10 cursor-pointer select-none items-center justify-center rounded bg-secondary text-secondary-foreground transition-all inset-ring-2 inset-ring-border hover:bg-secondary-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  })

  export type Props = ComponentProps<typeof Pagination.PrevButton>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Pagination.PrevButton {...restProps} class={variants({ class: className })} />
