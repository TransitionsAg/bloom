<script lang="ts" module>
	import { TimeRangeField } from "bits-ui";
	import { cva } from "cva";
	import type { ComponentProps } from "svelte";

	export const variants = cva({
		base: "flex flex-col gap-2",
	});

	export type Props = ComponentProps<typeof TimeRangeField.Root>;
</script>

<script lang="ts">
	let { value = $bindable(), placeholder = $bindable(), class: className, ...restProps }: Props = $props();
</script>

<TimeRangeField.Root bind:value bind:placeholder {...restProps} class={variants({ class: className })} />
