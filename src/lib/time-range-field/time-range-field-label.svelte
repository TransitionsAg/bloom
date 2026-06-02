<script lang="ts" module>
	import { TimeRangeField } from "bits-ui";
	import { cva } from "cva";
	import type { ComponentProps } from "svelte";

	export const variants = cva({
		base: "block select-none typo-sm text-foreground data-disabled:text-disabled-foreground",
	});

	export type Props = ComponentProps<typeof TimeRangeField.Label>;
</script>

<script lang="ts">
	const { class: className, ...restProps }: Props = $props();
</script>

<TimeRangeField.Label {...restProps} class={variants({ class: className })} />
