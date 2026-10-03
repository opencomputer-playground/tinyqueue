import { test } from 'node:test';
import assert from 'node:assert';
import { TinyQueue } from '../dist/index.js';

test('pops in order', () => {
  const q = new TinyQueue();
  [5, 1, 4].forEach((n) => q.push(n));
  assert.deepStrictEqual([q.pop(), q.pop(), q.pop()], [1, 4, 5]);
});
