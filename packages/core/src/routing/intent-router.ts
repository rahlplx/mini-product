import type { AgentName, IntentResult, PrimaryIntent, UserQueryContext } from './intent-types';
import { getDefaultAgentForIntent } from './agent-map';

const BUILD_HINTS = ['build', 'create', 'scaffold', 'implement', 'wire', 'ship', 'add'];
const PLAN_HINTS = ['plan', 'define', 'scope', 'architecture', 'design', 'roadmap'];
const VALIDATE_HINTS = ['test', 'verify', 'validate', 'benchmark', 'check', 'review', 'safe'];
const IMPROVE_HINTS = ['improve', 'faster', 'optimize', 'tune', 'harden', 'refine', 'fix'];
const OPERATE_HINTS = ['monitor', 'telemetry', 'learn', 'analytics', 'deploy', 'launch', 'automate'];

function score(text: string, hints: string[]): number {
  const normalized = text.toLowerCase();
  return hints.reduce((count, hint) => count + (normalized.includes(hint) ? 1 : 0), 0);
}

function chooseIntent(text: string): PrimaryIntent {
  const scores: Record<PrimaryIntent, number> = {
    build: score(text, BUILD_HINTS),
    plan: score(text, PLAN_HINTS),
    validate: score(text, VALIDATE_HINTS),
    improve: score(text, IMPROVE_HINTS),
    operate: score(text, OPERATE_HINTS),
  };

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as PrimaryIntent;
}

function agentForSpecialCases(text: string, fallback: AgentName): AgentName {
  const normalized = text.toLowerCase();
  if (normalized.includes('learn') || normalized.includes('feedback')) return 'Feedback Synthesizer';
  if (normalized.includes('safe') || normalized.includes('risk')) return 'Reality Checker';
  if (normalized.includes('review') || normalized.includes('benchmark')) return 'Testing';
  return fallback;
}

export function routeUserQuery(context: UserQueryContext): IntentResult {
  const intent = chooseIntent(context.text);
  const fallback = getDefaultAgentForIntent(intent);
  const agent = agentForSpecialCases(context.text, fallback);
  const normalized = context.text.toLowerCase();
  const confidence = Math.min(0.95, 0.45 + Math.max(0, score(context.text, [
    ...BUILD_HINTS,
    ...PLAN_HINTS,
    ...VALIDATE_HINTS,
    ...IMPROVE_HINTS,
    ...OPERATE_HINTS,
  ])) * 0.15);
  const clarificationNeeded = confidence < 0.6 || normalized.length < 12;

  return {
    intent,
    agent,
    confidence,
    clarificationNeeded,
    explanation: `Routed as ${intent} intent to ${agent}.`,
  };
}
