<script lang="ts" module>
  import { RatingGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex items-center gap-1 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
  })

  export type Props = ComponentProps<typeof RatingGroup.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RatingGroup.Root {...restProps} class={variants({ class: className })} />
