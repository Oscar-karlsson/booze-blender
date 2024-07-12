const conversionFactors = {
    ml: { ml: 1, cl: 0.1, oz: 0.033814, part: 20, tsp: 0.202884 }, // Changed part to 20 ml
    cl: { ml: 10, cl: 1, oz: 0.33814, part: 2, tsp: 2.02884 }, // Adjusted cl equivalent
    oz: { ml: 29.5735, cl: 2.95735, oz: 1, part: 0.75, tsp: 6 }, // Adjusted oz equivalent
    part: { ml: 20, cl: 2, oz: 0.75, part: 1, tsp: 6 }, // Adjusted part to 20 ml
    tsp: { ml: 4.92892, cl: 0.492892, oz: 0.166667, part: 0.166667, tsp: 1 },
  };
  
  const roundToCommonMeasure = (amount, unit) => {
    const commonMeasures = {
      ml: [1, 5, 10, 15, 20, 25, 30, 45, 50, 60, 75, 100, 150, 200, 250, 300, 500, 750, 1000],
      cl: [0.1, 0.5, 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 30, 50, 75, 100],
      oz: [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12],
      part: [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12],
      tsp: [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10],
    };
  
    if (!commonMeasures[unit]) return amount;
  
    let closest = commonMeasures[unit][0];
    for (const measure of commonMeasures[unit]) {
      if (Math.abs(amount - measure) < Math.abs(amount - closest)) {
        closest = measure;
      }
    }
    return closest;
  };
  
  export const convertMeasurement = (amount, fromUnit, toUnit) => {
    if (!amount) return 0;
    if (fromUnit === toUnit) return amount;
    const conversionFactor = conversionFactors[fromUnit][toUnit];
    if (!conversionFactor) {
      throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported.`);
    }
    const convertedAmount = amount * conversionFactor;
    return roundToCommonMeasure(convertedAmount, toUnit);
  };
  
  export const isValidUnit = (unit) => {
    return unit in conversionFactors;
  };
  
  const parseMeasurement = (measure) => {
    if (!measure) return [0, ''];
    let amount;
    const parts = measure.trim().split(' ');
  
    if (measure.trim() === '1/4') {
      amount = 1; // Treat it as 1 part
      return [amount, 'part'];
    } else if (parts.length === 3 && parts[1].includes('/')) {
      const wholeNumber = parseFloat(parts[0]);
      const fractionParts = parts[1].split('/');
      amount = wholeNumber + parseFloat(fractionParts[0]) / parseFloat(fractionParts[1]);
      const unit = parts[2].toLowerCase().replace(/[^a-z]/g, '') || 'part';
      return [amount, unit];
    } else if (parts.length === 2 && parts[0].includes('/')) {
      const fractionParts = parts[0].split('/');
      amount = parseFloat(fractionParts[0]) / parseFloat(fractionParts[1]);
      const unit = parts[1].toLowerCase().replace(/[^a-z]/g, '') || 'part';
      return [amount, unit];
    } else if (parts[0].includes('/')) {
      const fractionParts = parts[0].split('/');
      amount = parseFloat(fractionParts[0]) / parseFloat(fractionParts[1]);
      const unit = parts.slice(1).join(' ').toLowerCase().replace(/[^a-z]/g, '') || 'part';
      return [amount, unit];
    } else if (parts.length === 2 && (parts[1] === 'part' || parts[1] === 'parts')) {
      amount = parseFloat(parts[0]);
      return [amount, 'part'];
    } else {
      amount = parseFloat(parts[0]);
      const unit = parts.slice(1).join(' ').toLowerCase().replace(/[^a-z]/g, '') || 'part';
      return [amount, unit];
    }
  };
  
  export const getAdjustedMeasurement = (measure, servingSize, targetUnit) => {
    const [amount, unit] = parseMeasurement(measure);
    if (!amount || isNaN(amount) || !isValidUnit(unit) || !isValidUnit(targetUnit)) {
      return measure;
    }
    // Calculate the adjusted amount based on the serving size
    const adjustedAmount = convertMeasurement(amount * servingSize, unit, targetUnit);
    return `${adjustedAmount} ${targetUnit}`;
  };
  