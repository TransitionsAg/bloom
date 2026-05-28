<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "py-1",
  })

  export type Props = ComponentProps<typeof Menubar.RadioGroup>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.RadioGroup {...restProps} class={variants({ class: className })} />
