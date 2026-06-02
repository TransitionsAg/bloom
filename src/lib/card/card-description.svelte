<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  export const variants = cva({
    base: "typo-sm text-muted-foreground",
  })

  export type Props = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  const { class: className, children, ...restProps }: Props = $props()
</script>

<div data-bloom-card-description {...restProps} class={variants({ class: className })}>
  {@render children?.()}
</div>
