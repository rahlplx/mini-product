# Backend Plan

This backend is the product core for a Magic-Layers-like editor.
It should be platform-agnostic, API-first, versioned, and safe for both humans and AI agents.

## Backend Goals

- ingest flat images and external assets
- extract editable scene graphs
- store versions and edits
- translate NLP prompts into structured operations
- support commit, rollback, export, and audit
- run telemetry and learning jobs on a schedule
- stay independent from any single SaaS or frontend

## Core Backend Services

### 1. Ingestion Service

Responsibilities:
- accept uploads, URLs, and imported assets
- normalize file metadata
- create a project record
- queue extraction jobs

Inputs:
- image files
- poster exports
- screenshots
- design exports

Outputs:
- asset record
- project record
- extraction job

### 2. Extraction Service

Responsibilities:
- detect background
- detect text regions
- detect foreground objects
- run OCR
- create a first-pass scene graph
- attach confidence scores

Outputs:
- scene graph nodes
- bounding boxes
- OCR text
- layer confidence

### 3. Agent Orchestration Service

Responsibilities:
- convert plain-English prompts into edit operations
- validate operations against policy
- request missing context when confidence is low
- produce a draft plan before applying edits

Examples:
- "make title bigger"
- "replace background with sunset"
- "localize to Spanish"
- "prepare social version"

### 4. Editing Service

Responsibilities:
- apply operations to the scene graph
- create draft versions
- support rollback
- preserve edit history

Supported operations:
- move layer
- resize layer
- recolor layer
- replace image
- replace background
- edit text
- reorder layers
- group and ungroup
- export variant

### 5. Versioning Service

Responsibilities:
- store immutable versions
- store edit diffs
- allow compare, restore, and commit
- keep audit metadata

### 6. Export Service

Responsibilities:
- render final outputs
- support PNG, JPG, PDF, and video-ready exports
- produce format variants for social and web
- hand off render jobs to workers

### 7. Telemetry and Learning Service

Responsibilities:
- capture user corrections
- capture accepted and rejected suggestions
- log latency, failure rates, rollback rates
- run scheduled summarization jobs
- update prompt templates and heuristics

## Data Model

### Project
- id
- name
- owner_id
- source_type
- created_at
- updated_at

### Asset
- id
- project_id
- file_url
- mime_type
- width
- height
- checksum
- status
- created_at

### SceneGraph
- id
- project_id
- version_id
- type
- confidence
- created_at

### Layer
- id
- scene_graph_id
- parent_layer_id
- layer_type
- label
- bounds
- style
- confidence
- editable

Layer types:
- background
- text
- image
- shape
- icon
- decoration
- overlay

### TextBlock
- id
- layer_id
- content
- font_metadata
- text_bounds
- confidence

### EditOperation
- id
- project_id
- version_id
- operation_type
- payload
- actor_type
- actor_id
- status
- created_at

### Version
- id
- project_id
- parent_version_id
- status
- diff_summary
- created_at

### AuditEvent
- id
- project_id
- actor_type
- actor_id
- event_type
- payload
- created_at

## API Surface

### Project APIs
- `POST /projects`
- `GET /projects/:id`
- `GET /projects/:id/layers`

### Ingestion APIs
- `POST /projects/:id/ingest`
- `POST /projects/:id/assets`

### AI and Editing APIs
- `POST /projects/:id/plan`
- `POST /projects/:id/edit`
- `POST /projects/:id/commit`
- `POST /projects/:id/rollback`

### Export APIs
- `POST /projects/:id/export`
- `GET /projects/:id/exports/:exportId`

### Telemetry APIs
- `POST /events`
- `GET /projects/:id/activity`

## Job Queue Design

Use background jobs for any long-running task.

Job types:
- ingest asset
- extract scene graph
- run OCR
- generate edit plan
- apply edits
- render export
- compute quality metrics
- aggregate telemetry

Queue characteristics:
- retryable
- idempotent
- observable
- version-aware

## Storage Plan

Use separate stores for:
- project metadata
- scene graph
- version history
- audit logs
- telemetry
- exports
- job state

This keeps the product portable across:
- Postgres
- MySQL
- MongoDB
- DynamoDB
- object storage
- analytics warehouse

## AI Agent Contract

The backend should expose agent-friendly actions:

- inspect project
- inspect layers
- propose edits
- validate edits
- apply edits
- preview version
- commit version
- rollback version

Every agent action must return:
- result
- confidence
- reason
- next best action

## Safety Rules

- never auto-commit low-confidence edits
- require preview for destructive edits
- keep full audit history
- make rollback cheap
- store every AI proposal even if rejected

## Cron / Scheduled Jobs

Daily:
- aggregate telemetry
- summarize failures
- cluster user corrections

Weekly:
- refresh prompt templates
- review extraction failures
- update heuristics

Monthly:
- run benchmark regression
- tune confidence thresholds
- review connector health

## MVP Build Order

1. project creation and asset ingestion
2. scene graph extraction
3. version storage
4. edit planner
5. edit application
6. export pipeline
7. audit and telemetry
8. cron learning jobs

## What Not To Build Yet

- custom UI polish
- social collaboration features
- multi-tenant enterprise controls
- complex marketplace integrations
- advanced video composition

Focus first on:
- ingest
- layerize
- edit
- preview
- commit
- rollback

