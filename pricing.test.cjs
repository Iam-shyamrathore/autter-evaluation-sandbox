const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTotal } = require('./pricing.cjs');
test('zero discount and free shipping remain zero', () => {
  assert.equal(calculateTotal({ subtotalCents: 10000, discountPercent: 0, shippingCents: 0 }), 10000);
});
test('missing optional values mean zero discount and zero shipping', () => {
  assert.equal(calculateTotal({ subtotalCents: 10000 }), 10000);
});
test('discount and shipping compose', () => {
  assert.equal(calculateTotal({ subtotalCents: 10000, discountPercent: 10, shippingCents: 500 }), 9500);
});
test('invalid money is rejected', () => {
  assert.throws(() => calculateTotal({ subtotalCents: -1 }), RangeError);
});
