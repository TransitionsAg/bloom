<script lang="ts" module>
  import { Accordion } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group border-b-2 border-border px-1.5 last:border-b-0 data-[orientation=horizontal]:border-b-0 data-[orientation=horizontal]:border-r-2 data-[orientation=horizontal]:last:border-r-0 data-[disabled]:border-disabled-border [[data-variant=transparent]_&]:border-b [[data-variant=transparent]_&]:border-border/70",
  })

  export type Props = ComponentProps<typeof Accordion.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Accordion.Item {...restProps} class={variants({ class: className })} />
