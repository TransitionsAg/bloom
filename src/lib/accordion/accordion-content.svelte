<script lang="ts" module>
  import { Accordion } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "overflow-hidden text-sm text-muted-foreground tracking-[-0.01em] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[disabled]:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Accordion.Content>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<Accordion.Content {...restProps} class={variants({ class: className })}>
  <div class="px-5 pb-[25px] pt-3">
    {@render children?.()}
  </div>
</Accordion.Content>
