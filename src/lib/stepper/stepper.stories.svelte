<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf"

  import { Stepper } from "../index.ts"

  const { Story } = defineMeta({
    title: "Stepper",
    component: Stepper.Root,
  })
</script>

<script lang="ts">
  const onboardingSteps = [
    {
      title: "Profile",
      description: "Confirm contact details and team ownership.",
    },
    {
      title: "Billing",
      description: "Choose invoicing details and cost center.",
    },
    {
      title: "Review",
      description: "Validate the setup before inviting the team.",
    },
  ]

  let interactiveStep = $state(1)
</script>

{#snippet StepsList(disabledIndex?: number)}
  <Stepper.List>
    {#each onboardingSteps as step, index (step.title)}
      <Stepper.Item {index} disabled={disabledIndex === index}>
        <Stepper.Item.Trigger>
          <Stepper.Item.Indicator>{index + 1}</Stepper.Item.Indicator>
          <span>{step.title}</span>
        </Stepper.Item.Trigger>
        {#if index < onboardingSteps.length - 1}
          <Stepper.Item.Separator />
        {/if}
      </Stepper.Item>
    {/each}
  </Stepper.List>
{/snippet}

{#snippet StepContents()}
  {#each onboardingSteps as step, index (step.title)}
    <Stepper.Content {index}>
      <strong>{step.title}</strong>: {step.description}
    </Stepper.Content>
  {/each}
{/snippet}

<Story name="Default" asChild>
  <Stepper.Root count={onboardingSteps.length} defaultStep={1} class="max-w-xl">
    {@render StepsList()}
    {@render StepContents()}
    <div class="flex items-center gap-3">
      <Stepper.Trigger.Prev>Back</Stepper.Trigger.Prev>
      <Stepper.Trigger.Next>Continue</Stepper.Trigger.Next>
    </div>
  </Stepper.Root>
</Story>

<Story name="With Progress" asChild>
  <div class="w-full max-w-xl space-y-4">
    <Stepper.Root bind:step={interactiveStep} count={onboardingSteps.length}>
      <Stepper.Progress aria-label="Onboarding progress" />
      {@render StepsList()}
      {@render StepContents()}
      <div class="flex items-center justify-between gap-3">
        <p class="typo-sm text-muted-foreground">Step {interactiveStep + 1} of {onboardingSteps.length}</p>
        <div class="flex items-center gap-3">
          <Stepper.Trigger.Prev>Back</Stepper.Trigger.Prev>
          <Stepper.Trigger.Next>Continue</Stepper.Trigger.Next>
        </div>
      </div>
    </Stepper.Root>
  </div>
</Story>

<Story name="Vertical" asChild>
  <Stepper.Root count={onboardingSteps.length} defaultStep={1} orientation="vertical" class="max-w-sm">
    {@render StepsList()}
    {@render StepContents()}
  </Stepper.Root>
</Story>

<Story name="Disabled Step" asChild>
  <Stepper.Root count={onboardingSteps.length} defaultStep={0} class="max-w-xl">
    {@render StepsList(2)}
    {@render StepContents()}
    <div class="flex items-center gap-3">
      <Stepper.Trigger.Prev>Back</Stepper.Trigger.Prev>
      <Stepper.Trigger.Next>Continue</Stepper.Trigger.Next>
    </div>
  </Stepper.Root>
</Story>
