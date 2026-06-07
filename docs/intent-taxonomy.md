# Intent Taxonomy

Use this taxonomy to route user requests by intent, not exact keywords.

## Primary Intents

### Build
User wants to create something new.

Examples:
- build the backend
- scaffold the app
- create the layer extraction flow
- add export support

### Plan
User wants architecture, scope, or a roadmap.

Examples:
- plan the backend
- define the database
- scope the MVP
- map the agent workflow

### Validate
User wants tests, review, safety, or benchmark checks.

Examples:
- is this safe
- write tests
- verify the export
- check the AI output

### Improve
User wants optimization, cleanup, hardening, or refinement.

Examples:
- make this faster
- improve the prompt planner
- harden rollback
- reduce failure rate

### Operate
User wants deployment, monitoring, analytics, or learning loops.

Examples:
- monitor the jobs
- add telemetry
- automate learning
- ship it

## Secondary Intents

### Product readiness
- market ready
- launch ready
- production ready

### AI behavior
- layerize
- prompt-to-action
- confidence scoring
- editable layers

### Learning loop
- learn from users
- update heuristics
- improve from feedback

### Review and safety
- block risky edits
- explain why
- confidence gating

## Ambiguity Rule

If the intent is unclear:
1. route to `mini-product-intent-router`
2. infer the most likely category
3. ask one clarifying question only if needed

