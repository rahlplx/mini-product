# Hybrid Strategy

This project uses a hybrid execution model:

- **Skills** for auto-triggering and workflow guidance
- **Agents** for focused long-horizon work
- **Tools** for actual repository and backend actions
- **Docs** for the source of truth

## Why Hybrid

- Skills make the right workflow appear automatically from the user's words.
- Agents handle deep task ownership and reasoning.
- Tools execute changes.
- Docs keep the work spec-driven and test-driven.

## How It Works

### 1. User prompt enters the router

Examples:
- "backend planning"
- "layerize this image"
- "write tests"
- "make it market ready"
- "check if this is realistic"

### 2. Skill auto-triggers

- `mini-product-hybrid-router`
- `mini-product-backend-planner`
- `mini-product-ai-planner`
- `mini-product-testing-planner`

### 3. Agent ownership is selected

- Product Manager
- Backend Architect
- AI Engineer
- Testing
- Reality Checker
- Feedback Synthesizer

### 4. Spec-first execution

- write spec
- write tests
- implement minimum change
- review
- update docs

## Recommended Agent-Task Mapping

- product scope -> Product Manager
- backend shape -> Backend Architect
- AI planning -> AI Engineer
- quality gates -> Testing
- safety review -> Reality Checker
- learning loops -> Feedback Synthesizer

## Recommended Skill-Task Mapping

- routing and triage -> mini-product-hybrid-router
- backend planning -> mini-product-backend-planner
- AI planning -> mini-product-ai-planner
- tests and verification -> mini-product-testing-planner

