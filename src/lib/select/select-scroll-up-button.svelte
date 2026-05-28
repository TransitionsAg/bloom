<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex h-8 w-full cursor-default items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
  })

  export type Props = ComponentProps<typeof Select.ScrollUpButton>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.ScrollUpButton {...restProps} class={variants({ class: className })} />
