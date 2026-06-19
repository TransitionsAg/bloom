<script lang="ts" module>
  import { Calendar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-block rounded-xl inset-ring-2 inset-ring-border bg-surface p-4 text-foreground",
  })

  export type Props = ComponentProps<typeof Calendar.Root>
</script>

<script lang="ts">
  let { value = $bindable(), placeholder = $bindable(), class: className, ...restProps }: Props = $props()
</script>

<Calendar.Root bind:value={value as never} bind:placeholder {...restProps} class={variants({ class: className })} />
