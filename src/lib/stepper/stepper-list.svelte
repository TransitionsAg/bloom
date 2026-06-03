<script lang="ts" module>
  import { cva } from "cva"
  import type { HTMLAttributes } from "svelte/elements"

  import { getStepperContext } from "./stepper-context.js"

  export const variants = cva({
    base: "flex gap-2 data-[orientation=horizontal]:items-start data-[orientation=horizontal]:justify-center data-[orientation=vertical]:flex-col",
  })

  export type Props = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  const context = getStepperContext("Stepper.List")
  const { class: className, children, ...restProps }: Props = $props()
</script>

<div
  {...restProps}
  role="list"
  data-orientation={context.orientation()}
  class={variants({ class: className })}
>
  {@render children?.()}
</div>
