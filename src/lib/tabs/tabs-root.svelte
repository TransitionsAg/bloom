<script lang="ts" module>
  import { Tabs } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full flex-col gap-3 text-foreground data-[orientation=vertical]:flex-row data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Tabs.Root>
</script>

<script lang="ts">
  let { value = $bindable(), disabled, class: className, ...restProps }: Props = $props()
</script>

<Tabs.Root
  bind:value
  {...restProps}
  {disabled}
  data-disabled={disabled ? "" : undefined}
  class={variants({ class: className })}
/>
