# Intent Routing

The product should respond to user intent, not only keywords.

## Routing Principle

- Understand what the user wants to achieve.
- Classify the task by intent.
- Route to the right skill.
- Route to the right agent.
- Execute spec-first and test-first.

## Intent Examples

### "Can you make this faster?"
- intent: improve backend or workflow
- route: backend planner or AI planner depending on context

### "Is this safe to ship?"
- intent: validate or review
- route: testing planner + reality checker

### "I want this to learn from users"
- intent: learning loop
- route: feedback synthesizer + AI planner

### "Make it market ready"
- intent: product readiness
- route: hybrid router + backend planner + product manager

### "Turn this prompt into edits"
- intent: AI action planning
- route: AI planner

## Practical Rule

When the request is ambiguous, choose the routing skill first and then ask only the smallest necessary clarification.

