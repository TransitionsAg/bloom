<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "min-w-36 text-center text-sm font-semibold text-foreground",
  })

  export type Props = ComponentProps<typeof Calendar.Heading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Calendar.Heading {...restProps} class={variants({ class: className })} />
