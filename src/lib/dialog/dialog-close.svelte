<script lang="ts" module>
  import { Dialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex cursor-pointer select-none items-center justify-center rounded text-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof Dialog.Close>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Dialog.Close {...restProps} class={variants({ class: className })} />
