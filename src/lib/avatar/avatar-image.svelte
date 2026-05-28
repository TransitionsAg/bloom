<script lang="ts" module>
  import { Avatar } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "aspect-square h-full w-full object-cover",
  })

  export type Props = ComponentProps<typeof Avatar.Image>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Avatar.Image {...restProps} class={variants({ class: className })} />
