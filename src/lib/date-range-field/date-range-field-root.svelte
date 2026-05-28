<script lang="ts" module>
  import { DateRangeField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group flex w-full max-w-md flex-col gap-2 text-foreground data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DateRangeField.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateRangeField.Root {...restProps} class={variants({ class: className })} />
