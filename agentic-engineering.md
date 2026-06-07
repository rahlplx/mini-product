# Agentic Engineering Operating Model

This is the execution system for building the product with long-horizon tasks, spec-driven development, and TDD.

## Operating Rules

- Start with a written spec before implementation.
- Break the work into long-horizon tasks with clear checkpoints.
- Every task must have acceptance criteria.
- Every task must have tests before code.
- Every task must end with a reviewable artifact.
- Keep one source of truth for the current spec and task state.
- Do not move to the next task until the current one passes its checks.

## Long-Horizon Task Structure

Each task should be written like this:

1. Objective
- what outcome this task enables

2. Spec
- what the system must do
- what the system must not do
- what inputs and outputs exist

3. TDD cases
- happy path
- edge cases
- failure cases
- rollback cases

4. Implementation plan
- modules touched
- services touched
- data model changes
- API changes
- job changes

5. Verification
- tests to run
- benchmark to compare against
- manual review step

6. Exit criteria
- what proves the task is done
- what can still be deferred

## Task Hierarchy

Use 4 levels:

- **Epic**: a major product outcome
- **Milestone**: a major checkpoint inside the epic
- **Task**: a specific engineering unit with acceptance criteria
- **Subtask**: implementation detail inside a task

## Recommended Epics

### Epic 1: Core ingest-to-edit-to-export loop
- upload asset
- extract scene graph
- edit layers
- preview changes
- commit version
- export result

### Epic 2: AI planning and safety
- prompt-to-operation planner
- confidence scoring
- clarification prompts
- risky action blocking

### Epic 3: Versioning and auditability
- draft versions
- commits
- rollbacks
- audit logs

### Epic 4: Learning loop
- telemetry capture
- failure clustering
- heuristic updates
- scheduled review jobs

### Epic 5: Product readiness
- auth
- teams
- billing
- onboarding
- admin tools

## Spec-Driven Workflow

For every task:

1. Write the spec.
2. Write the test cases.
3. Write the data contracts.
4. Write the API contracts.
5. Write the job contracts.
6. Implement the smallest thing that satisfies the spec.
7. Run the tests.
8. Review the result.
9. Update the spec if reality differs.

## TDD Workflow

For every change:

1. Write failing tests first.
2. Implement the minimum code to pass.
3. Refactor only after green tests.
4. Re-run regression tests.
5. Update the benchmark if necessary.

## Agent Roles in the Workflow

### Product Manager
- owns the spec
- decides task priority
- approves scope changes

### Backend Architect
- owns services, data, jobs, and contracts

### AI Engineer
- owns extraction, OCR, edit planning, and confidence logic

### Testing
- writes tests and regression cases

### Reality Checker
- checks for plausibility and safety

### Feedback Synthesizer
- turns failures and user corrections into learning signals

### Code Reviewer
- checks code quality and spec compliance

## Suggested Long-Horizon Execution Pattern

### Week 1
- lock the core spec
- define schema
- define APIs
- define job system

### Week 2
- implement ingest and extraction
- store layers and versions
- add tests

### Week 3
- implement edit planner
- implement commit and rollback
- add safety checks

### Week 4
- implement export
- add telemetry
- add audit events

### Week 5
- add learning loop
- run benchmark regression
- tighten confidence rules

### Week 6
- add auth, teams, and billing scaffolding
- harden admin and support flows

## Quality Gates

Do not advance until these are true:

- spec exists
- tests exist
- data contracts exist
- API contracts exist
- job contracts exist
- rollback works
- export works
- AI behavior is explainable
- telemetry is captured

## Artifact Checklist

Each task must produce:

- a spec update
- a test update
- a code or implementation change
- a review note
- a verification result

## What This Looks Like In Practice

Example task: "Layerize an uploaded poster"

Spec:
- input: flat image
- output: background + text + foreground layers
- constraint: editable layers with confidence scores

Tests:
- poster with large title
- poster with small caption
- background-only image
- low-contrast text

Implementation:
- ingestion job
- OCR job
- segmentation job
- scene graph save

Verification:
- inspect extracted layer tree
- confirm text is editable
- confirm rollback keeps original file intact

## Non-Negotiables

- no implementation without a spec
- no merge without tests
- no long task without checkpoints
- no auto-commit for risky AI actions
- no invisible state changes

