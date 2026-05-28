<script lang="ts" module>
  import { RatingGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "group inline-flex size-9 shrink-0 cursor-pointer select-none items-center justify-center rounded text-border transition-colors hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-[readonly]:cursor-default data-[state=active]:text-yellow-400 data-[state=partial]:text-yellow-400 data-[disabled]:pointer-events-none data-[disabled]:text-disabled-foreground data-[disabled]:opacity-50 active:scale-[0.96]",
  })

  export type Props = ComponentProps<typeof RatingGroup.Item>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<RatingGroup.Item {...restProps} class={variants({ class: className })} />
