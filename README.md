# Mini Product: Magic-Layers-Like Visual Editor

Goal: build a platform-agnostic visual editor that can ingest a flat image, split it into editable layers, and let both humans and AI agents modify it through natural language.

## Core References

- `vibe-stack` as the app/runtime foundation
- `canva-claude-skills` as the workflow reference for image-to-design, poster editing, translation, feedback, and motion concepts
- `agency-agents` as the agent operating model for product, engineering, QA, design, and feedback roles

## Repo Structure

```text
mini-product/
├── apps/
│   ├── api/
│   └── worker/
├── packages/
│   ├── ai/
│   ├── core/
│   └── storage/
├── database/
├── docs/
├── infra/
├── scripts/
└── tests/
```

## Product Principles

- NLP-first: the user should be able to describe the goal in plain language
- Platform-agnostic: no hard dependency on one SaaS, DB, or backend
- Human + agent shared editor: both operate on the same scene graph
- TDD-first: every workflow needs acceptance criteria before implementation
- Learning loop: telemetry and cron jobs improve prompts, defaults, and heuristics over time

## MVP Scope

1. Upload or import a flat image
2. Detect layers, text, foreground objects, and background
3. Expose an editable visual canvas
4. Let the user or agent:
   - move layers
   - resize layers
   - recolor layers
   - replace background
   - edit text
   - export a variant
5. Save versions and allow rollback
6. Track failures and improvement signals

## Recommended Skill Set

From `canva-claude-skills`:

- `poster-generation`
- `video-animation`
- `design-translation`
- `implement-feedback`
- `resize-for-social-media`
- `branded-presentation`

Why:
- `poster-generation` gives the image-to-edit flow
- `video-animation` covers motion output
- `design-translation` supports localization
- `implement-feedback` gives review-driven iteration
- `resize-for-social-media` helps output variants
- `branded-presentation` is useful if the product later expands into decks

## Recommended Agent Set

From `agency-agents` style roles:

- Product Manager
- Backend Architect
- Frontend Developer
- AI Engineer
- Reality Checker
- Code Reviewer
- Testing
- Feedback Synthesizer
- Whimsy Injector

## What Each Agent Does

- Product Manager: converts plain-English goals into a scoped release plan
- Backend Architect: defines APIs, queues, storage, auth, and versioning
- Frontend Developer: builds the visual editor and layer controls
- AI Engineer: implements extraction, OCR, layer recovery, and edit planning
- Reality Checker: validates whether AI suggestions are sane
- Code Reviewer: checks implementation quality
- Testing: writes and runs workflow tests
- Feedback Synthesizer: turns user corrections into prompt or heuristic updates
- Whimsy Injector: improves polish and usability for non-technical users

## First Workflow To Build

1. User uploads a flat image
2. System converts it into a scene graph
3. System shows editable layers
4. User says, in NLP:
   - "make the title bigger"
   - "swap the background to a sunset"
   - "turn this into a clean Instagram post"
5. AI agent proposes edits
6. Human previews changes
7. Commit or rollback

## TDD Workflow

Each feature must have:

- a user story
- acceptance criteria
- test cases
- failure cases
- expected export result

Examples:

- Given a poster with text, the title should remain editable
- Given a flat image, the background should be separable
- Given a change request, the edit plan should be explainable
- Given a rollback, the original version should be restored

## Next Build Steps

1. Define the scene graph schema
2. Define the agent command schema
3. Define the edit operation schema
4. Define the plugin/adapter contract
5. Define the benchmark and tests
6. Define the cron-based learning jobs
7. Define the backend service boundaries and API contracts
8. Define the agentic engineering operating model for long-horizon execution
9. Convert the plan into an execution backlog and MVP spec
