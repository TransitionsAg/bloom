<script lang="ts" module>
  import { Pagination } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-fit flex-col gap-3 text-foreground data-[orientation=vertical]:flex-row data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Pagination.Root>
</script>

<script lang="ts">
  const { class: className, page, ...restProps }: Props = $props()
</script>

<Pagination.Root {page} {...restProps} class={variants({ class: className })} />
