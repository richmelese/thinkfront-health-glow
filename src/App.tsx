
import React, { useState } from 'react';
import AviatorGame from './pages/AviatorGame';
import FrontPage from './pages/FrontPage';

const App: React.FC = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {showGame ? (
        <AviatorGame />
      ) : (
<FrontPage onStart={() => setShowGame(true)} />
      )}
    </div>
  );
};

export default App;

