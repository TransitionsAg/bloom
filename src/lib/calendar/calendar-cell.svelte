<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative size-10 p-0 text-center text-sm",
  })

  export type Props = ComponentProps<typeof Calendar.Cell>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.Cell {...restProps} class={variants({ class: className })} />
