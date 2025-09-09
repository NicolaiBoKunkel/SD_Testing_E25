function calculateFramingPrice(widthCm, heightCm) {
  [widthCm, heightCm].forEach((v, i) => {
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      throw new TypeError((i === 0 ? 'Width' : 'Height') + ' must be a finite number.');
    }
  });

  if (widthCm < 30 || widthCm > 100) {
    throw new RangeError('Width must be between 30 and 100 cm inclusive.');
  }
  if (heightCm < 30 || heightCm > 60) {
    throw new RangeError('Height must be between 30 and 60 cm inclusive.');
  }

  const area = widthCm * heightCm;
  const EPS = 1e-9;

  return (area - 1600 > EPS) ? 3500 : 3000;
}

module.exports = { calculateFramingPrice };
