<script lang="ts" module>
  import { Separator } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "shrink-0 bg-separator data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
  })

  export type Props = ComponentProps<typeof Separator.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Separator.Root {...restProps} class={variants({ class: className })} />
