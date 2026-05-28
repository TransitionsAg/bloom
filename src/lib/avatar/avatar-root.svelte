<script lang="ts" module>
  import { Avatar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative inline-flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted align-middle text-sm font-semibold text-foreground transition-colors data-[status=loaded]:bg-transparent data-[status=loading]:border-transparent",
  })

  export type Props = ComponentProps<typeof Avatar.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Avatar.Root {...restProps} class={variants({ class: className })} />
