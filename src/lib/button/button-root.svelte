<script lang="ts" module>
  import { Button } from "bits-ui";
  import { cva, type VariantProps } from "cva";
  import type { ComponentProps } from "svelte";

  export const variants = cva({
    base: "inline-flex items-center justify-center rounded font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
    variants: {
      intent: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-accent active:bg-primary-accent",
        secondary:
          "bg-secondary text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent active:bg-secondary-accent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-accent active:bg-destructive-accent",
        link: "bg-transparent relative [&::after]:content-[''] [&::after]:absolute [&::after]:left-0 [&::after]:-bottom-1 [&::after]:block [&::after]:h-[2px] [&::after]:w-full [&::after]:bg-current [&::after]:scale-x-0 [&::after]:transition-transform [&::after]:duration-200 [&::after]:origin-center hover:[&::after]:scale-x-100",
      },
      size: {
        sm: "px-5 py-3 text-sm font-semibold",
        md: "px-5 py-3",
        lg: "px-5 py-3 text-lg font-semibold",
        square: "p-2 size-10",
        fit: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  })

  export type Props = ComponentProps<typeof Button.Root> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const { intent, size, class: className, ...restProps }: Props = $props()
</script>

<Button.Root
  {...restProps}
  class={variants({ intent, size, class: className })}
/>
