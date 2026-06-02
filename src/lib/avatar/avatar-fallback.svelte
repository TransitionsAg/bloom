<script lang="ts" module>
  import { Avatar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex h-full w-full select-none items-center justify-center bg-secondary typo-xs uppercase tracking-[0.08em] text-secondary-foreground",
  })

  export type Props = ComponentProps<typeof Avatar.Fallback>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Avatar.Fallback {...restProps} class={variants({ class: className })} />
