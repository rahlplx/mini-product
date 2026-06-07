import assert from 'node:assert/strict';
import { routeIntentRequest } from '../../apps/api/src/routes/intent.js';

const result = routeIntentRequest({ text: 'plan the backend database and jobs' });

assert.equal(result.agent, 'Backend Architect');
assert.equal(result.intent, 'plan');

console.log('intent-routing.test.mjs passed');
