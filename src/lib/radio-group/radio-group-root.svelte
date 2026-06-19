<script lang="ts" module>
  import { RadioGroup } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "grid gap-3 text-foreground data-[disabled]:text-disabled-foreground data-[readonly]:text-muted-foreground data-[orientation=horizontal]:flex data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:items-center data-[orientation=horizontal]:gap-x-5",
  })

  export type Props = ComponentProps<typeof RadioGroup.Root>
</script>

<script lang="ts">
  let { value = $bindable(""), class: className, ...restProps }: Props = $props()
</script>

<RadioGroup.Root bind:value {...restProps} class={variants({ class: className })} />
