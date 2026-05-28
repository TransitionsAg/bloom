<script lang="ts" module>
  import { Switch } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "pointer-events-none block size-5 shrink-0 rounded-full border-2 border-border bg-background transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=unchecked]:translate-x-0",
  })

  export type Props = ComponentProps<typeof Switch.Thumb>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Switch.Thumb {...restProps} class={variants({ class: className })} />
