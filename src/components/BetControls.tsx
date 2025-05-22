
// src/components/BetControls.tsx
import React from 'react';

interface BetControlsProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  handleBet: () => void;
  isPlaying: boolean;
}

const BetControls: React.FC<BetControlsProps> = ({ betAmount, setBetAmount, handleBet, isPlaying }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-4">
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(Number(e.target.value))}
        className="p-2 border rounded w-full text-black"
        placeholder="Enter Bet Amount"
      />
      <button
        onClick={handleBet}
        disabled={isPlaying}
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
      >
        Place Bet
      </button>
    </div>
  );
};

export default BetControls;
