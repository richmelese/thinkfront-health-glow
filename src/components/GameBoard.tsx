// src/components/GameBoard.tsx
import React from 'react';

interface GameBoardProps {
  multiplier: number;
  onStop: () => void;
  isPlaying: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ multiplier, onStop, isPlaying }) => {
  return (
    <div className="text-center mt-6">
      <div className="text-4xl font-bold text-green-500">x{multiplier.toFixed(2)}</div>
      {isPlaying && (
        <button
          onClick={onStop}
          className="mt-4 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
        >
          Stop
        </button>
      )}
    </div>
  );
};

export default GameBoard;
