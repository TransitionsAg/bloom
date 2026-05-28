<script lang="ts" module>
  import { DateField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex min-w-[2ch] select-none items-center justify-center rounded px-1 py-1 text-center tabular-nums text-foreground transition-colors aria-[valuetext=Empty]:text-caption data-[disabled]:text-disabled-foreground data-[invalid]:text-destructive data-[readonly]:text-caption data-[segment=literal]:min-w-0 data-[segment=literal]:px-0.5 data-[segment=literal]:text-caption",
  })

  export type Props = ComponentProps<typeof DateField.Segment>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DateField.Segment {...restProps} class={variants({ class: className })} />
