<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-12 w-full min-w-0 rounded border-2 border-border bg-field px-4 text-[15px] text-foreground transition-all placeholder:text-caption focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-disabled disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground",
  })

  export type Props = ComponentProps<typeof Combobox.Input>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Input {...restProps} class={variants({ class: className })} />
