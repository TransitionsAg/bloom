<script lang="ts" module>
  import { Select } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "px-3 pb-2 pt-3 typo-xs uppercase tracking-[0.08em] text-caption",
  })

  export type Props = ComponentProps<typeof Select.GroupHeading>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Select.GroupHeading {...restProps} class={variants({ class: className })} />
