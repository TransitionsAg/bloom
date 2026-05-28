<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-10 cursor-default select-none items-center gap-3 rounded px-3 py-2 text-sm text-foreground outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
  })

  export type Props = ComponentProps<typeof Menubar.RadioItem>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.RadioItem {...restProps} class={variants({ class: className })} />
