<script lang="ts" module>
  import { cva, type VariantProps } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  export const variants = cva({
    base: "rounded-lg bg-surface text-foreground inset-ring-2 inset-ring-border",
    variants: {
      size: {
        sm: "text-sm font-medium [&_[data-bloom-card-title]]:text-base [&_[data-bloom-card-description]]:text-xs [&_[data-bloom-card-header]]:gap-1 [&_[data-bloom-card-content]]:pt-4 [&_[data-bloom-card-footer]]:pt-4",
        normal:
          "text-base font-medium [&_[data-bloom-card-title]]:text-lg [&_[data-bloom-card-description]]:text-sm [&_[data-bloom-card-header]]:gap-1.5 [&_[data-bloom-card-content]]:pt-6 [&_[data-bloom-card-footer]]:pt-6",
        lg: "text-lg font-medium [&_[data-bloom-card-title]]:text-xl [&_[data-bloom-card-description]]:text-base [&_[data-bloom-card-header]]:gap-2 [&_[data-bloom-card-content]]:pt-8 [&_[data-bloom-card-footer]]:pt-8",
      },
      padding: {
        none: "",
        sm: "p-4",
        normal: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      size: "normal",
      padding: "normal",
    },
  })

  export type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const { size, padding, class: className, children, ...restProps }: Props = $props()
</script>

<div
  {...restProps}
  data-size={size ?? "normal"}
  data-padding={padding ?? "normal"}
  class={variants({ size, padding, class: className })}
>
  {@render children?.()}
</div>
