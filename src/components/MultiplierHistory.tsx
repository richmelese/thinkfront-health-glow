// // src/components/History.tsx
// import React from 'react';

// interface HistoryProps {
//   history: number[];
// }

// const History: React.FC<HistoryProps> = ({ history }) => {
//   return (
//     <div className="mt-6 w-full max-w-md mx-auto">
//       <h2 className="text-lg font-semibold text-center">Game History</h2>
//       <div className="flex flex-wrap gap-2 justify-center mt-2">
//         {history.slice(-10).map((item, index) => (
//           <span key={index} className="text-sm bg-gray-300 px-2 py-1 rounded">
//             x{item.toFixed(2)}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default History;
import React from 'react';

interface MultiplierHistoryProps {
  history: number[];
}

const MultiplierHistory: React.FC<MultiplierHistoryProps> = ({ history }) => {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto text-sm">
      {history.map((m, i) => (
        <div
          key={i}
          className={`px-2 py-1 rounded ${
            m < 2 ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
          }`}
        >
          {m.toFixed(2)}x
        </div>
      ))}
    </div>
  );
};

export default MultiplierHistory;

