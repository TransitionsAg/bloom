<script lang="ts" module>
  import { Toolbar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex max-w-full items-center gap-1 rounded-lg bg-surface text-foreground inset-ring-2 inset-ring-border data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  })

  export type Props = ComponentProps<typeof Toolbar.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Toolbar.Root {...restProps} class={variants({ class: className })} />
