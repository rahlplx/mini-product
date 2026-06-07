import { routeIntentRequest } from './routes/intent.js';

export function appRoutePreview(text) {
  return routeIntentRequest({ text });
}

