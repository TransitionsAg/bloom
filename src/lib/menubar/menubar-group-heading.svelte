<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
  })

  export type Props = ComponentProps<typeof Menubar.GroupHeading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.GroupHeading {...restProps} class={variants({ class: className })} />
