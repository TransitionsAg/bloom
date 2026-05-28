<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex size-10 cursor-pointer items-center justify-center rounded text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50",
  })

  export type Props = ComponentProps<typeof Combobox.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Trigger {...restProps} class={variants({ class: className })} />
