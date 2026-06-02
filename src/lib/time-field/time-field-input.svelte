<script lang="ts" module>
  import { TimeField } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-12 w-full select-none items-center rounded-lg border-2 border-border bg-field px-3 py-2 text-sm font-medium text-field-foreground transition-all hover:bg-field-accent focus-within:border-primary focus-within:outline-none data-[disabled]:border-disabled-border data-[disabled]:bg-disabled data-[disabled]:text-disabled-foreground data-[invalid]:border-destructive data-[invalid]:focus-within:border-destructive [&_[data-segment]]:cursor-text [&_[data-segment]]:rounded [&_[data-segment]]:px-0.5 [&_[data-segment]]:transition-colors [&_[data-segment]]:hover:bg-background [&_[data-segment]]:focus:outline-none [&_[data-segment]]:focus:bg-surface [&_[data-segment]]:focus:text-foreground [&_[data-segment]]:focus:ring-2 [&_[data-segment]]:focus:ring-primary",
  })

  export type Props = ComponentProps<typeof TimeField.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<TimeField.Input {...restProps} class={variants({ class: className })} />
