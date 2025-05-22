// src/components/FuelGauge.tsx
import React from 'react';

interface FuelGaugeProps {
  multiplier: number;
}

const FuelGauge: React.FC<FuelGaugeProps> = ({ multiplier }) => {
  return (
    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mt-6">
      <div
        className="h-full bg-green-500 transition-all duration-200"
        style={{ width: `${Math.min(multiplier * 10, 100)}%` }}
      ></div>
    </div>
  );
};

export default FuelGauge;
