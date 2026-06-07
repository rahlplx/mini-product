# MVP Spec

## Product Statement

Build a platform-agnostic visual editor that can ingest a flat image, split it into editable layers, let a human or AI agent make safe edits, and export the result.

## Non-Negotiable Outcomes

- Upload a flat image
- Extract a scene graph with editable layers
- Apply edits as drafts
- Preview changes before commit
- Commit or rollback safely
- Export the final design
- Track audit and telemetry data

## In-Scope for MVP

- image upload
- project creation
- scene graph extraction
- OCR text extraction
- layer editing
- prompt-to-operation planning
- version commit and rollback
- export to image formats
- audit logging
- telemetry capture

## Out of Scope for MVP

- billing UI polish
- team collaboration features
- marketplace
- advanced video editing
- social scheduling
- external SaaS integrations beyond storage/auth basics
- microservices decomposition

## User Stories

### Story 1
As a user, I can upload a flat image so the system can convert it into editable parts.

### Story 2
As a user, I can change text or background with a plain-English request.

### Story 3
As a user, I can preview edits before saving them.

### Story 4
As a user, I can rollback if the AI makes a bad suggestion.

### Story 5
As a user, I can export the final result in a common image format.

## Acceptance Criteria

### Upload
- source image accepted
- asset metadata stored
- job created

### Extraction
- background identified
- text extracted
- major objects separated
- confidence stored

### Edit Planning
- prompt translated to operations
- confidence visible
- low-confidence paths gated

### Editing
- draft version created
- operations applied in order
- preview available

### Versioning
- commit creates immutable version
- rollback restores prior version

### Export
- export completes successfully
- exported file is attached to version

## Success Metrics

- upload success rate
- layer extraction usefulness
- prompt-to-edit acceptance rate
- rollback rate
- export success rate
- time to first useful edit

## Minimum Test Set

- poster with large title
- poster with small subtitle
- image with one prominent subject
- low-contrast text image
- background-only image
- edit rollback scenario
- export retry scenario

## Implementation Principles

- no silent state changes
- no auto-commit for risky edits
- every edit is versioned
- every job is observable
- every API is deterministic and testable

