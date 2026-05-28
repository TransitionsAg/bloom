<script lang="ts" module>
  import { cva } from "cva"

  export const variants = cva({
    base: "self-stretch w-0.5 bg-border",
  })

  export type Props = {
    class?: string | undefined | null
  }
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<div {...restProps} role="separator" aria-orientation="vertical" class={variants({ class: className })}></div>
