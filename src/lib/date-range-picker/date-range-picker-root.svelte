<script lang="ts" module>
  import { DateRangePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full max-w-[360px] flex-col gap-2 text-foreground data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof DateRangePicker.Root>
</script>

<script lang="ts">
  let { value = $bindable(), placeholder = $bindable(), open = $bindable(), class: className, ...restProps }: Props = $props()
</script>

<DateRangePicker.Root bind:value bind:placeholder bind:open {...restProps} class={variants({ class: className })} />
