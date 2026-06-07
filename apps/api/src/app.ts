import { routeIntentRequest } from './routes/intent';

export function appRoutePreview(text: string) {
  return routeIntentRequest({ text });
}
