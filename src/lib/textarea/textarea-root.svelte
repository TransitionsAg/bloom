<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLTextareaAttributes } from "svelte/elements"

  export const variants = cva({
    base: "flex min-h-24 w-full min-w-0 rounded border-2 border-border bg-field px-4 py-3 text-[15px] font-medium text-foreground transition-all placeholder:text-muted-foreground hover:bg-field-accent focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled disabled:text-disabled-foreground disabled:placeholder:text-disabled-foreground aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive",
  })

  export type Props = HTMLTextareaAttributes
</script>

<script lang="ts">
  let { value = $bindable(), class: className, ...restProps }: Props = $props()
</script>

<textarea bind:value {...restProps} class={variants({ class: className })}></textarea>
