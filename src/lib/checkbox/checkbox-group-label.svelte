<script lang="ts" module>
  import { Checkbox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "text-sm font-semibold text-muted-foreground data-[disabled]:opacity-50",
  })

  export type Props = ComponentProps<typeof Checkbox.GroupLabel>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Checkbox.GroupLabel {...restProps} class={variants({ class: className })} />
