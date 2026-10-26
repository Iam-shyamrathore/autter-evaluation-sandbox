// Synthetic checkout fixture. Integer amounts are cents.
function calculateTotal({ subtotalCents, discountPercent = 0, shippingCents = 0 }) {
  if (!Number.isSafeInteger(subtotalCents) || subtotalCents < 0) throw new RangeError('Invalid subtotal');
  if (!Number.isSafeInteger(shippingCents) || shippingCents < 0) throw new RangeError('Invalid shipping');
  if (!Number.isFinite(discountPercent) || discountPercent < 0 || discountPercent > 100) throw new RangeError('Invalid discount');
  return Math.round(subtotalCents * (1 - discountPercent / 100)) + shippingCents;
}
module.exports = { calculateTotal };
