<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "space-y-1",
  })

  export type Props = ComponentProps<typeof Calendar.GridBody>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.GridBody {...restProps} class={variants({ class: className })} />
