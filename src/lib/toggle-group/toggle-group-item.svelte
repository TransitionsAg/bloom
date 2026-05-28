<script lang="ts" module>
  import { ToggleGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "inline-flex h-10 min-w-10 cursor-pointer select-none items-center justify-center gap-2 rounded px-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary-accent data-[orientation=vertical]:w-full active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  })

  export type Props = ComponentProps<typeof ToggleGroup.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<ToggleGroup.Item {...restProps} class={variants({ class: className })} />
