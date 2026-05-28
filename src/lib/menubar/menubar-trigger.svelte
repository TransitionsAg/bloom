<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-10 cursor-default select-none items-center justify-center rounded-9px px-3 text-sm font-semibold text-foreground transition-colors data-[highlighted]:bg-muted data-[state=open]:bg-muted disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
  })

  export type Props = ComponentProps<typeof Menubar.Trigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.Trigger {...restProps} class={variants({ class: className })} />
