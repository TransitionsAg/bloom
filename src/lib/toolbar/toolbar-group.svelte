<script lang="ts" module>
  import { Toolbar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex items-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  })

  export type Props = ComponentProps<typeof Toolbar.Group>
</script>

<script lang="ts">
  const { disabled, class: className, ...restProps }: Props = $props()
</script>

<Toolbar.Group
  {...restProps}
  {disabled}
  data-disabled={disabled ? "" : undefined}
  data-bloom-toolbar-group
  class={variants({ class: className })}
/>
