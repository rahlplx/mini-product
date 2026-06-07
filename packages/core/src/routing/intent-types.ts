export type PrimaryIntent = 'build' | 'plan' | 'validate' | 'improve' | 'operate';

export type AgentName =
  | 'Product Manager'
  | 'Backend Architect'
  | 'AI Engineer'
  | 'Testing'
  | 'Reality Checker'
  | 'Feedback Synthesizer'
  | 'Code Reviewer';

export interface IntentResult {
  intent: PrimaryIntent;
  agent: AgentName;
  confidence: number;
  clarificationNeeded: boolean;
  explanation: string;
}

export interface UserQueryContext {
  text: string;
  productArea?: string;
  riskLevel?: 'low' | 'medium' | 'high';
}
