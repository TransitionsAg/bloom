<script lang="ts" module>
  import { Pagination } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-fit flex-row gap-3 inset-ring-border rounded-lg text-foreground data-[orientation=vertical]:flex-row data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Pagination.Root>
</script>

<script lang="ts">
  let { class: className, page = $bindable(), ...restProps }: Props = $props()
</script>

<Pagination.Root bind:page {...restProps} class={variants({ class: className })} />
