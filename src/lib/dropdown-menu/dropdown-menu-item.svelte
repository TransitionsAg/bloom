<script lang="ts" module>
  import { DropdownMenu } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "relative flex min-h-9 cursor-default select-none items-center gap-2 px-4 py-2 text-sm font-medium text-foreground outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
  })

  export type Props = ComponentProps<typeof DropdownMenu.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<DropdownMenu.Item {...restProps} class={variants({ class: className })} />
