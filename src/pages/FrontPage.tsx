import React from 'react';
import heroPlane from '../assets/plane.png';

interface FrontPageProps {
  onStart: () => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ onStart }) => {

  return (
    <div className="min-h-screen bg-[#101622] text-white font-sans">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-[#1e002e] to-[#500012] rounded-lg shadow-xl mt-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Win Upto <br />
            <span className="text-yellow-400">1.5 MILLION</span> <br />
            In Seconds!
          </h1>
          <div className="flex gap-4">
         <button
  onClick={onStart}
  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow"
>
  Click to play demo
</button>
      
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow">
              Login for real play
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={heroPlane}
            alt="Red Aviator Plane"
            className="w-full max-w-md drop-shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-4xl mx-auto mt-12 p-4 text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Overview of The Aviator Game</h2>
        <p className="text-lg leading-relaxed">
          The Aviator Game is a thrilling crash gambling game that’s gained popularity among players
          in Kenya for its simplicity and captivating gameplay. Set against a stark black backdrop,
          the game features a runway with a red airplane at its center.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          It allows players to place two bets simultaneously, offering a blend of suspense and
          strategy. As the multiplier increases, so does the excitement, compelling players to make
          quick, critical decisions.
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
