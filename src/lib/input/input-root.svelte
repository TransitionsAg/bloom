<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLInputAttributes } from "svelte/elements"

  export const variants = cva({
    base: "inline-flex h-12 w-full min-w-0 rounded border-2 border-border bg-field px-4 text-[15px] text-foreground transition-all placeholder:text-muted-foreground hover:bg-field-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground aria-invalid:border-destructive",
  })

  export type Props = HTMLInputAttributes
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<input {...restProps} class={variants({ class: className })} />
