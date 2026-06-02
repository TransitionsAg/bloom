<script lang="ts" module>
  import { Dialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-sm font-medium leading-6 text-muted-foreground",
  })

  export type Props = ComponentProps<typeof Dialog.Description>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Dialog.Description {...restProps} class={variants({ class: className })} />
