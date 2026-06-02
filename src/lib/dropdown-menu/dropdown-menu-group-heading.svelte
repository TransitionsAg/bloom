<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "px-4 py-2 typo-xs uppercase tracking-wide text-muted-foreground",
  })

  export type Props = ComponentProps<typeof DropdownMenu.GroupHeading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.GroupHeading {...restProps} class={variants({ class: className })} />
