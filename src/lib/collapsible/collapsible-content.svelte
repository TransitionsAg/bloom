<script lang="ts" module>
  import { Collapsible } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "overflow-hidden border-border text-sm font-medium text-muted-foreground data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down data-[disabled]:border-disabled-border data-[disabled]:text-disabled-foreground [[data-variant=transparent]_&]:border-t [[data-variant=transparent]_&]:border-border [&:not([hidden]):not([data-state=closed])]:border-t-2",
  })

  export type Props = ComponentProps<typeof Collapsible.Content>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<Collapsible.Content {...restProps} class={variants({ class: className })}>
  <div>
    <div class="px-5 pb-5 pt-4">
      {@render children?.()}
    </div>
  </div>
</Collapsible.Content>
