<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-12 items-center gap-1 rounded-10px inset-ring-2 inset-ring-border bg-background px-1 shadow-mini",
  })

  export type Props = ComponentProps<typeof Menubar.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.Root {...restProps} class={variants({ class: className })} />
