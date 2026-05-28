<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "h-0.5 bg-border",
  })

  export type Props = ComponentProps<typeof Menubar.Separator>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.Separator {...restProps} class={variants({ class: className })} />
