# Product Backlog

This backlog translates the product vision into execution-ready work.
It is organized for long-horizon agentic engineering with spec-first, test-first delivery.

## Epic 1: Core Ingest-to-Edit-to-Export Loop

### Milestone 1.1: Asset Intake

- Task 1.1.1: Create project records
  - Outcome: a workspace exists for one design
  - Acceptance: project can be created, fetched, and listed
  - Tests: create project, duplicate name handling, invalid owner handling

- Task 1.1.2: Upload flat images
  - Outcome: user can upload a source file
  - Acceptance: file stored, metadata saved, job queued
  - Tests: PNG/JPG/WEBP, file too large, unsupported type, retry on queue failure

### Milestone 1.2: Scene Graph Extraction

- Task 1.2.1: Detect background and major regions
  - Outcome: first-pass layer tree exists
  - Acceptance: at least background + foreground regions created
  - Tests: single object, text-heavy poster, low-contrast image

- Task 1.2.2: OCR and editable text blocks
  - Outcome: text becomes editable blocks
  - Acceptance: text blocks stored with confidence and bounds
  - Tests: large heading, caption, rotated text, low-quality text

### Milestone 1.3: Editing and Versioning

- Task 1.3.1: Apply draft edits
  - Outcome: operations mutate draft only
  - Acceptance: move/resize/recolor/edit text work on draft version
  - Tests: draft isolation, invalid operation rejection, multi-op ordering

- Task 1.3.2: Commit and rollback
  - Outcome: versions become immutable
  - Acceptance: commit creates version, rollback restores prior version
  - Tests: rollback after commit, invalid version, concurrent edit conflict

### Milestone 1.4: Export

- Task 1.4.1: Render export variants
  - Outcome: final files are downloadable
  - Acceptance: PNG/JPG/PDF export works
  - Tests: export success, export timeout, retry, file integrity

## Epic 2: AI Planning and Safety

### Milestone 2.1: Prompt-to-Operation Planner

- Task 2.1.1: Parse natural language commands
  - Outcome: prompt becomes structured operations
  - Acceptance: planner returns operations and explanation
  - Tests: title resize, background swap, localization, ambiguous prompt

- Task 2.1.2: Clarification and safety gating
  - Outcome: low confidence prompts do not auto-commit
  - Acceptance: clarification question or safe fallback is returned
  - Tests: risky edit, missing context, conflicting instructions

### Milestone 2.2: Confidence and Review

- Task 2.2.1: Confidence scoring
  - Outcome: every proposed edit has a score
  - Acceptance: scores stored and visible to reviewer
  - Tests: high confidence, low confidence, mixed confidence plan

- Task 2.2.2: Human approval gate
  - Outcome: risky edits require preview confirmation
  - Acceptance: no commit without approval for gated changes
  - Tests: approval accepted, approval rejected, timeout

## Epic 3: Observability and Learning

### Milestone 3.1: Audit and Telemetry

- Task 3.1.1: Audit events
  - Outcome: every action is attributable
  - Acceptance: actor, event, payload, timestamp stored
  - Tests: human action, agent action, rollback action

- Task 3.1.2: Telemetry events
  - Outcome: product behavior can be measured
  - Acceptance: prompt success, rollback, latency, failure tracked
  - Tests: event ingestion, duplicate handling, event schema validation

### Milestone 3.2: Learning Loop

- Task 3.2.1: Daily aggregation job
  - Outcome: failures and corrections are summarized
  - Acceptance: scheduled job produces report artifacts
  - Tests: no-data case, large-data case, partial-failure case

- Task 3.2.2: Heuristic update pipeline
  - Outcome: prompt templates and thresholds can improve
  - Acceptance: updates are versioned and reversible
  - Tests: bad update rollback, benchmark regression detection

## Epic 4: Product Readiness

### Milestone 4.1: Auth and Teams

- Task 4.1.1: Authentication
  - Outcome: users can sign in securely
  - Acceptance: user identity is enforced on all project actions
  - Tests: authenticated request, unauthorized request, token expiry

- Task 4.1.2: Team access control
  - Outcome: shared workspaces work
  - Acceptance: owner/member roles respected
  - Tests: permission deny, permission grant, team switch

### Milestone 4.2: Billing and Limits

- Task 4.2.1: Plan and quota enforcement
  - Outcome: usage can be limited by plan
  - Acceptance: usage tracked and blocked when limits exceeded
  - Tests: quota hit, upgrade flow, overage policy

### Milestone 4.3: Admin and Support

- Task 4.3.1: Admin inspection tools
  - Outcome: support can investigate issues
  - Acceptance: admin can inspect project state and versions
  - Tests: read-only access, audit visibility, safe rollback assist

## Dependencies

- Asset intake before extraction
- Extraction before editing
- Editing before versioning
- Versioning before export
- Telemetry before learning loop
- Auth before multi-user production use
- Billing before public launch

## Release Order

1. Core ingest-to-edit-to-export loop
2. AI planning and safety
3. Observability and learning
4. Auth and teams
5. Billing and limits
6. Admin and support

