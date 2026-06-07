import { routeUserQuery } from '@core/routing';

export interface IntentRequest {
  text: string;
  productArea?: string;
  riskLevel?: 'low' | 'medium' | 'high';
}

export function routeIntentRequest(input: IntentRequest) {
  return routeUserQuery({
    text: input.text,
    productArea: input.productArea,
    riskLevel: input.riskLevel,
  });
}
