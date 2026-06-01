<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  export const variants = cva({
    base: "rounded-lg bg-surface p-6 text-foreground inset-ring-2 inset-ring-border",
  })

  export type Props = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<div {...restProps} class={variants({ class: className })}>
  {@render children?.()}
</div>
