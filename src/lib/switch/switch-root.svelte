<script lang="ts" module>
  import { Switch } from "bits-ui"
  import { cva } from "cva"
  import type { ComponentProps } from "svelte"

  export const variants = cva({
    base: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-border bg-field p-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary-accent data-[state=unchecked]:hover:bg-field-accent",
  })

  export type Props = ComponentProps<typeof Switch.Root>
</script>

<script lang="ts">
  let { checked = $bindable(false), class: className, ...restProps }: Props = $props()
</script>

<Switch.Root bind:checked {...restProps} class={variants({ class: className })} />
