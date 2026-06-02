<script lang="ts" module>
	import { Time } from "@internationalized/date";
	import { defineMeta } from "@storybook/addon-svelte-csf";

	import { TimeRangeField } from "../index.ts";

	const startTime = new Time(9, 0);
	const endTime = new Time(17, 0);

	const { Story } = defineMeta({
		title: "Time Range Field",
		component: TimeRangeField.Root,
	});
</script>

<Story name="Default" asChild>
	<TimeRangeField.Root value={{ start: startTime, end: endTime }}>
		<div class="flex max-w-xs flex-col gap-2">
			<TimeRangeField.Label>Working hours</TimeRangeField.Label>
			<div class="flex items-center gap-2">
				<TimeRangeField.Input type="start">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
				<span class="text-sm font-medium text-muted-foreground">to</span>
				<TimeRangeField.Input type="end">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
			</div>
		</div>
	</TimeRangeField.Root>
</Story>

<Story name="Seconds" asChild>
	<TimeRangeField.Root value={{ start: startTime, end: endTime }} granularity="second">
		<div class="flex max-w-xs flex-col gap-2">
			<TimeRangeField.Label>Track duration</TimeRangeField.Label>
			<div class="flex items-center gap-2">
				<TimeRangeField.Input type="start">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
				<span class="text-sm font-medium text-muted-foreground">to</span>
				<TimeRangeField.Input type="end">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
			</div>
		</div>
	</TimeRangeField.Root>
</Story>

<Story name="Disabled" asChild>
	<TimeRangeField.Root value={{ start: startTime, end: endTime }} disabled>
		<div class="flex max-w-xs flex-col gap-2">
			<TimeRangeField.Label>Unavailable slot</TimeRangeField.Label>
			<div class="flex items-center gap-2">
				<TimeRangeField.Input type="start">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
				<span class="text-sm font-medium text-disabled-foreground">to</span>
				<TimeRangeField.Input type="end">
					{#snippet children({ segments })}
						{#each segments as { part, value }, index (part + index)}
							<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
						{/each}
					{/snippet}
				</TimeRangeField.Input>
			</div>
		</div>
	</TimeRangeField.Root>
</Story>
