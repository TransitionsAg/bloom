<script lang="ts" module>
  import { Accordion } from "bits-ui"
  import { cva, type VariantProps } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex w-full flex-col overflow-hidden rounded-lg text-foreground data-[orientation=horizontal]:flex-row data-[disabled]:text-disabled-foreground",
    variants: {
      variant: {
        default:
          "bg-surface inset-ring-2 inset-ring-border data-[disabled]:bg-disabled data-[disabled]:inset-ring-disabled-border",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  })

  export type Props = ComponentProps<typeof Accordion.Root> & VariantProps<typeof variants>
</script>

<script lang="ts">
  let { value = $bindable(), variant, disabled, class: className, ...restProps }: Props = $props()
</script>

<Accordion.Root
  bind:value={value as never}
  {...restProps}
  {disabled}
  data-disabled={disabled ? "" : undefined}
  data-variant={variant ?? "default"}
  class={variants({ variant, class: className })}
/>
