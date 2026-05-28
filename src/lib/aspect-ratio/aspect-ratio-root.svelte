<script lang="ts" module>
  import { AspectRatio } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "overflow-hidden rounded-lg bg-surface text-foreground inset-ring-2 inset-ring-border [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
  })

  export type Props = ComponentProps<typeof AspectRatio.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<AspectRatio.Root {...restProps} class={variants({ class: className })} />
