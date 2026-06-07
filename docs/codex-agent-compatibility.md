# Codex Agent Compatibility

This product is designed to run with the Codex coding agent as the primary automation surface.

## Requirements

- skill metadata must be intent-driven and Codex-readable
- agent names must match the installed Codex agents
- routing docs must describe the intent-first workflow
- repo docs must remain the source of truth
- no assumption should rely on exact keyword matching only

## Compatible Layers

- Codex skills for auto-triggering
- Codex agents for long-horizon work
- backend API routes for execution
- tests for TDD verification
- docs for human-readable source of truth

## Practical Rule

If a new skill or agent is added, it must be:
- usable from the Codex coding agent
- mapped to intent categories
- documented in the repo
- testable in the mini-product workflow

