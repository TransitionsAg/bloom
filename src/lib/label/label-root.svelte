<script lang="ts" module>
  import { Label } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "select-none typo-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:text-disabled-foreground peer-disabled:opacity-70",
  })

  export type Props = ComponentProps<typeof Label.Root>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Label.Root {...restProps} class={variants({ class: className })} />
