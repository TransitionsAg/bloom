<script lang="ts" module>
  import { PinInput } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group/pin-input flex items-center gap-2 text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50",
  })

  export type Props = ComponentProps<typeof PinInput.Root>
</script>

<script lang="ts">
  let { value = $bindable(), class: className, ...restProps }: Props = $props()
</script>

<PinInput.Root bind:value {...restProps} class={variants({ class: className })} />
