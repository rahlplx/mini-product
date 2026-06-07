import assert from 'node:assert/strict';
import { routeUserQuery } from '../../packages/core/src/routing/intent-router.js';

const result = routeUserQuery({ text: 'make this safer before launch' });

assert.equal(typeof result.intent, 'string');
assert.equal(typeof result.agent, 'string');
assert.ok(result.confidence >= 0);
assert.equal(typeof result.clarificationNeeded, 'boolean');

console.log('router.test.mjs passed');
