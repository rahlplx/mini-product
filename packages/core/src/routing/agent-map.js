const DEFAULT_AGENT_BY_INTENT = {
  build: 'Backend Architect',
  plan: 'Product Manager',
  validate: 'Testing',
  improve: 'AI Engineer',
  operate: 'Feedback Synthesizer',
};

export function getDefaultAgentForIntent(intent) {
  return DEFAULT_AGENT_BY_INTENT[intent];
}

