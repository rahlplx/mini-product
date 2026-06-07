import type { AgentName, PrimaryIntent } from './intent-types';

const DEFAULT_AGENT_BY_INTENT: Record<PrimaryIntent, AgentName> = {
  build: 'Backend Architect',
  plan: 'Product Manager',
  validate: 'Testing',
  improve: 'AI Engineer',
  operate: 'Feedback Synthesizer',
};

export function getDefaultAgentForIntent(intent: PrimaryIntent): AgentName {
  return DEFAULT_AGENT_BY_INTENT[intent];
}
