<script lang="ts" module>
  import { Combobox } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex min-h-10 w-full cursor-pointer select-none items-center gap-3 rounded px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[highlighted]:bg-muted data-[highlighted]:text-foreground",
  })

  export type Props = ComponentProps<typeof Combobox.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Combobox.Item {...restProps} class={variants({ class: className })} />
