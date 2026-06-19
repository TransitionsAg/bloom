<script lang="ts" module>
  import { ToggleGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex max-w-full items-center gap-1 rounded-lg bg-surface p-1 text-foreground inset-ring-2 inset-ring-border data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[disabled]:bg-disabled data-[disabled]:inset-ring-disabled-border",
  })

  export type Props = ComponentProps<typeof ToggleGroup.Root>
</script>

<script lang="ts">
  let { value = $bindable(), disabled, class: className, ...restProps }: Props = $props()
</script>

<ToggleGroup.Root
  bind:value={value as never}
  {...restProps}
  {disabled}
  data-disabled={disabled ? "" : undefined}
  class={variants({ class: className })}
/>
