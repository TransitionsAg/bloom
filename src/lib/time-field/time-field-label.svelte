<script lang="ts" module>
  import { TimeField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "select-none typo-sm text-foreground data-[disabled]:text-disabled-foreground data-[invalid]:text-destructive",
  })

  export type Props = ComponentProps<typeof TimeField.Label>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<TimeField.Label {...restProps} class={variants({ class: className })} />
