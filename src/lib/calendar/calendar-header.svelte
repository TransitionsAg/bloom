<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex items-center justify-between gap-3",
  })

  export type Props = ComponentProps<typeof Calendar.Header>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.Header {...restProps} class={variants({ class: className })} />
