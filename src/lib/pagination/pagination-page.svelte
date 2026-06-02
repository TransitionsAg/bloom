<script lang="ts" module>
  import { Pagination } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex size-10 cursor-pointer select-none items-center justify-center typo-sm tabular-nums text-secondary-foreground transition-all hover:bg-muted-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 active:scale-[0.98] data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary-accent",
  })

  export type Props = ComponentProps<typeof Pagination.Page>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Pagination.Page {...restProps} class={variants({ class: className })} />
