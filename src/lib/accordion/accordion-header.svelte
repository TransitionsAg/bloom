<script lang="ts" module>
  import { Accordion } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "flex w-full",
  })

  export type Props = ComponentProps<typeof Accordion.Header>
</script>

<script lang="ts">
  const { class: className, ...restProps }: Props = $props()
</script>

<Accordion.Header {...restProps} class={variants({ class: className })} />
