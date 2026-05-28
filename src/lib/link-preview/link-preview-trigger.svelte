<script lang="ts" module>
  import { LinkPreview } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex cursor-pointer items-center rounded text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:text-muted-foreground hover:decoration-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[state=open]:text-muted-foreground",
  })

  export type Props = ComponentProps<typeof LinkPreview.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<LinkPreview.Trigger {...restProps} class={variants({ class: className })} />
