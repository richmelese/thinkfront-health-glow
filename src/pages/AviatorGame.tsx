import React, { useEffect, useState, useRef } from 'react';
import planeImg from '../assets/plane.png';

const AviatorGame: React.FC = () => {
  // Existing states + new states
  const [bet, setBet] = useState<number | ''>('');
  const [multiplier, setMultiplier] = useState(1);
  const [isFlying, setIsFlying] = useState(false);
  const [history, setHistory] = useState<number[]>([]);
  const [gameMessage, setGameMessage] = useState('');
  const [cashedOutMultiplier, setCashedOutMultiplier] = useState<number | null>(null);
  const [crashPoint, setCrashPoint] = useState<number>(0);

  // New states for balance, fuel, plane position & angle
  const [balance, setBalance] = useState(100); // Starting balance
  const [fuel, setFuel] = useState(100); // Fuel from 0 to 100
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });
  const [planeAngle, setPlaneAngle] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startFlight = () => {
    if (isFlying) return;
    if (typeof bet !== 'number' || bet <= 0 || bet > balance) {
      setGameMessage('Please enter a valid bet amount within your balance.');
      return;
    }

    setGameMessage('');
    setCashedOutMultiplier(null);
    setMultiplier(1);
    setIsFlying(true);
    setCrashPoint(parseFloat((2 + Math.random() * 6).toFixed(2)));
    setFuel(100);
    setPlanePosition({ x: 0, y: 0 });
    setPlaneAngle(0);
    setBalance((prev) => prev - (bet || 0)); // Deduct bet immediately
  };

  const cashOut = () => {
    if (!isFlying) return;
    setCashedOutMultiplier(multiplier);
    const winnings = (Number(bet) || 0) * multiplier;
    setBalance((prev) => prev + winnings);
    setGameMessage(`You cashed out at ${multiplier.toFixed(2)}x! You win $${winnings.toFixed(2)} 🎉`);
    setIsFlying(false);
    setHistory((h) => [multiplier, ...h].slice(0, 10));
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isFlying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setMultiplier((prev) => {
        const increment = 0.02 + Math.random() * 0.03;
        const nextMultiplier = prev + increment;

        // Decrease fuel
        setFuel((f) => {
          const newFuel = f - 0.7; // adjust fuel consumption rate here
          if (newFuel <= 0) {
            // Out of fuel => crash
            setIsFlying(false);
            setGameMessage(`🚨 Crashed due to fuel at ${nextMultiplier.toFixed(2)}x! You lost $${bet}.`);
            setHistory((h) => [nextMultiplier, ...h].slice(0, 10));
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return newFuel;
        });

        // Check crash point
        if (nextMultiplier >= crashPoint) {
          setIsFlying(false);
          setGameMessage(`🚨 Crashed at ${crashPoint.toFixed(2)}x! You lost $${bet}.`);
          setHistory((h) => [crashPoint, ...h].slice(0, 10));
          if (intervalRef.current) clearInterval(intervalRef.current);
          return crashPoint;
        }

        // Animate plane position & angle
        setPlanePosition({
          x: nextMultiplier * 22,
          y: Math.sin(nextMultiplier * 2) * 30,
        });
        setPlaneAngle(Math.sin(nextMultiplier * 5) * 15); // swing between -15 and 15 degrees

        return nextMultiplier;
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isFlying, crashPoint, bet]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl text-white font-sans">

      {/* History Bar */}
      <div className="flex overflow-x-auto space-x-2 text-sm text-pink-300 mb-4 px-2">
        {history.map((val, i) => (
          <span key={i} className="bg-gray-800 px-3 py-1 rounded-lg shadow">
            {val.toFixed(2)}x
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400 drop-shadow">✈️ Aviator Crash Game</h1>

      {/* Balance and Fuel */}
      <div className="flex justify-center space-x-12 mb-4 text-lg font-semibold">
        <div className="text-green-400">Balance: ${balance.toFixed(2)}</div>
        <div className="text-yellow-400">Fuel: {fuel.toFixed(1)}</div>
      </div>

      {/* Game Display */}
      <div className="relative h-64 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl border border-gray-700 overflow-hidden mb-6 shadow-inner">

  {/* ✨ Mood Banner */}
    <div className="bg-gradient-to-r from-yellow-300 via-pink-500 to-red-400 px-8 py-3  l animate-pulse text-center">
    <p className="text-black text-base md:text-lg font-bold tracking-wide drop-shadow-sm">
       fun mood
    </p>
  </div>

  {/* 🌈 Trail Line */}
  <div
    className="absolute left-0 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-yellow-300 rounded-full transition-all duration-75 ease-linear"
    style={{
      width: `${(multiplier / 8) * 100}%`,
      top: `calc(50% + ${Math.sin(multiplier * 2) * 30}px)`,
      transform: 'translateY(-50%)',
    }}
  />

  {/* ✈️ Plane */}
  <div
    className="absolute transition-transform duration-75 ease-linear z-10"
    style={{
      transform: `translateX(${planePosition.x}px) translateY(${planePosition.y}px) rotate(${planeAngle}deg)`,
    }}
  >
    <img
      src={planeImg}
      alt="Plane"
      className="w-80 h-24 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-transform duration-75 ease-linear"
    />
  </div>

  {/* 🔥 Live Multiplier */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl font-black text-pink-400 animate-pulse z-10">
    {multiplier.toFixed(2)}x
  </div>
</div>


      {/* Game Message */}
      {gameMessage && (
        <div className={`text-center mb-4 font-semibold ${cashedOutMultiplier ? 'text-green-400' : 'text-red-400'}`}>
          {gameMessage}
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 flex-wrap mb-6">
       <div className="relative">
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">💰</span>
  <input
    type="number"
    placeholder="Enter Bet"
    min="0.01"
    step="0.01"
    value={bet}
    onChange={(e) => setBet(e.target.value === '' ? '' : parseFloat(e.target.value))}
    disabled={isFlying}
    className="pl-10 pr-4 py-2 w-36 rounded-full text-center bg-gradient-to-r from-gray-100 to-white text-gray-800 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-300 transition-all duration-300 disabled:opacity-60"
  />
</div>


        <button
          onClick={startFlight}
          disabled={isFlying || bet === '' || bet <= 0 || bet > balance}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition transform duration-300 shadow-lg disabled:opacity-50"
        >
          🎰 Bet
        </button>

        <button
          onClick={cashOut}
          disabled={!isFlying}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition transform duration-300 shadow-lg disabled:opacity-50"
        >
          💸 Cash Out
        </button>
      </div>
    </div>
  );
};

export default AviatorGame;


