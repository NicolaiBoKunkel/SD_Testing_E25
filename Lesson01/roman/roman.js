const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToDecimal(roman) {
  if (typeof roman !== "string" || roman.length === 0) {
    throw new Error("Invalid Roman numeral input");
  }

  // Check for invalid repetition
  if (/IIII|XXXX|CCCC|MMMM/.test(roman)) {
    throw new Error("Invalid repetition in Roman numeral");
  }
  if (/VV|LL|DD/.test(roman)) {
    throw new Error("Invalid repetition in Roman numeral");
  }

  // Check for invalid subtractive combinations
  if (/IL|IC|ID|IM|VX|VL|VC|VD|VM|XD|XM|LC|LD|LM|DM/.test(roman)) {
    throw new Error("Invalid subtractive combination in Roman numeral");
  }

  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const char = roman[i];
    const value = romanMap[char];

    if (!value) {
      throw new Error(`Invalid Roman numeral character: ${char}`);
    }

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
      prevValue = value;
    }
  }

  if (total <= 0 || total > 3999) {
    throw new Error("Roman numeral out of range (1–3999)");
  }

  return total;
}

module.exports = { romanToDecimal };
