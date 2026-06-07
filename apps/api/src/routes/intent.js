import { routeUserQuery } from '../../../../packages/core/src/routing/intent-router.js';

export function routeIntentRequest(input) {
  return routeUserQuery({
    text: input.text,
    productArea: input.productArea,
    riskLevel: input.riskLevel,
  });
}

