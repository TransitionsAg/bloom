<script lang="ts" module>
	import { TimeRangeField } from "bits-ui";
	import { cva } from "cva";
	import type { ComponentProps } from "svelte";

	export const variants = cva({
    base: "rounded px-1.5 py-1 tabular-nums text-foreground outline-none transition-colors data-[segment=literal]:px-0.5 data-[segment=literal]:text-muted-foreground data-[valuetext=Empty]:text-caption data-disabled:text-disabled-foreground",
	});

	export type Props = ComponentProps<typeof TimeRangeField.Segment>;
</script>

<script lang="ts">
	const { class: className, ...restProps }: Props = $props();
</script>

<TimeRangeField.Segment {...restProps} class={variants({ class: className })} />
