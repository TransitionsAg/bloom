<script lang="ts" module>
  import { Checkbox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex flex-col gap-3 text-foreground data-[disabled]:opacity-50",
  })

  export type Props = ComponentProps<typeof Checkbox.Group>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Checkbox.Group {...restProps} class={variants({ class: className })} />
