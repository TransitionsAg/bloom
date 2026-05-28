<script lang="ts" module>
  import { AlertDialog } from "bits-ui"
  import { cva, type VariantProps } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-12 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded px-[21px] text-[15px] font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    variants: {
      intent: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-accent",
        secondary:
          "bg-secondary text-secondary-foreground inset-ring-2 inset-ring-border hover:bg-secondary-accent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-accent",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  })

  export type Props = ComponentProps<typeof AlertDialog.Trigger> & VariantProps<typeof variants>
</script>

<script lang="ts">
  const { intent, class: className, ...restProps }: Props = $props()
</script>

<AlertDialog.Trigger {...restProps} class={variants({ intent, class: className })} />
