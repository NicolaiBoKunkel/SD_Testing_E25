function calculateDiscountPercent(amountKr) {
  if (typeof amountKr !== 'number' || !Number.isFinite(amountKr)) {
    throw new TypeError('Amount must be a finite number.');
  }
  if (amountKr <= 0) {
    throw new RangeError('Amount must be positive.');
  }

  const cents = Math.round(amountKr * 100);
  const back = cents / 100;
  if (Math.abs(back - amountKr) > 1e-9) {
    throw new RangeError('Amount must have at most 2 decimal places (1 øre).');
  }

  if (amountKr <= 300.00) return 0;
  if (amountKr <= 800.00) return 5;
  return 10;
}

module.exports = { calculateDiscountPercent };
