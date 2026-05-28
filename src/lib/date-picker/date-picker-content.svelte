<script lang="ts" module>
  import { DatePicker } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "z-50 rounded-lg border-2 border-border bg-background p-2 text-foreground outline-none data-[state=closed]:animate-dialog-content-out data-[state=open]:animate-dialog-content-in",
  })

  export type Props = ComponentProps<typeof DatePicker.Content>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DatePicker.Content {...restProps} class={variants({ class: className })} />
