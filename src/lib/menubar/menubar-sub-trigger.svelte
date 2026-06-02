<script lang="ts" module>
  import { Menubar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-10 cursor-default select-none items-center gap-3 rounded px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[highlighted]:bg-muted data-[state=open]:bg-muted [&_svg]:ml-auto [&_svg]:size-4 [&_svg]:text-muted-foreground",
  })

  export type Props = ComponentProps<typeof Menubar.SubTrigger>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Menubar.SubTrigger {...restProps} class={variants({ class: className })} />
