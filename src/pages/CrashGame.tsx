import React, { useState, useEffect } from 'react';
import BetControls from '../components/BetControls';
import FuelGauge from '../components/FuelGauge';
import GameBoard from '../components/GameBoard';
import History from '../components/MultiplierHistory';

const CrashGame: React.FC = () => {
  const [multiplier, setMultiplier] = useState(1);
  const [betAmount, setBetAmount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameInterval, setGameInterval] = useState<NodeJS.Timeout | null>(null);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setMultiplier((prev) => parseFloat((prev + 0.01).toFixed(2)));
      }, 100);
      setGameInterval(interval);
    } else {
      if (gameInterval) clearInterval(gameInterval);
    }
    return () => {
      if (gameInterval) clearInterval(gameInterval);
    };
  }, [isPlaying]);

  const handleBet = () => {
    if (betAmount > 0) {
      setMultiplier(1);
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setHistory([...history, multiplier]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Crash Game</h1>
      <BetControls
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        handleBet={handleBet}
        isPlaying={isPlaying}
      />
      <GameBoard multiplier={multiplier} onStop={handleStop} isPlaying={isPlaying} />
      <FuelGauge multiplier={multiplier} />
      <History history={history} />
    </div>
  );
};

export default CrashGame;
