<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-lg font-extrabold tracking-[-0.02em] text-foreground",
  })

  export type Props = ComponentProps<typeof AlertDialog.Title>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<AlertDialog.Title {...restProps} class={variants({ class: className })} />
