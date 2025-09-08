function calculateDiscountedPrice(quantity, pricePerUnit) {
  if (quantity < 5) {
    throw new Error("Minimum order quantity is 5");
  }
  let total = quantity * pricePerUnit;
  if (quantity >= 100) {
    total *= 0.8;
  }
  return total;
}

module.exports = { calculateDiscountedPrice };