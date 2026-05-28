<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-12 w-full cursor-pointer select-none items-center justify-center whitespace-nowrap rounded bg-secondary px-[21px] text-[15px] font-semibold text-secondary-foreground inset-ring-2 inset-ring-border transition-all hover:bg-secondary-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  })

  export type Props = ComponentProps<typeof AlertDialog.Cancel>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<AlertDialog.Cancel {...restProps} class={variants({ class: className })} />
