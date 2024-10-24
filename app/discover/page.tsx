// pages/index.js
import React from 'react';

export default function Discover() {
  const discoverItems = [
    { name: 'Flipgg', description: 'More details of token' },
    { name: 'Drift Protocol', description: 'More details of token' },
    { name: 'Zignaly', description: 'More details of token' },
    { name: 'Chingari', description: 'More details of token' },
    { name: 'Moon Roll', description: 'More details of token' },
  ];

  const newArrivals = [
    { name: 'Allbridge', price: '$3,245.03', change: '-13.40%', symbol: 'ETH', changeType: 'negative' },
    { name: 'Astrospace', price: '$3,245.03', change: '-6.00%', symbol: 'BTC', changeType: 'negative' },
    { name: 'Buddy', price: '$3,245.03', change: '+14.25%', symbol: 'ITC', changeType: 'positive' },
  ];

  const recommendedItems = [
    { name: 'Honeyland', description: 'More details of token' },
    { name: 'Saber Project', description: 'More details of token' },
    { name: 'Chingari', description: 'More details of token' },
    { name: 'Access Protocol', description: 'More details of token' },
  ];

  const topCharts = [
    { rank: 1, name: 'Zignaly', price: '$3,245.03' },
    { rank: 2, name: 'Pip', price: '$3,245.03' },
    { rank: 3, name: 'Mean Finance', price: '$3,245.03' },
  ];

  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Section (Discover, Recommended, Top Charts) */}
        <div className="col-span-2 space-y-8">
          {/* Discover Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white">Discover</h2>
            <p className="text-sm text-gray-400 mb-6">Experience more in the decentralized web</p>
            <div className="flex space-x-4 overflow-x-auto">
              {discoverItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 p-4 rounded-lg w-40 flex-shrink-0 cursor-pointer ${
                    index === 2 ? 'border-2 border-purple-500' : ''
                  }`}
                >
                  <div className="h-24 w-full bg-gray-700 mb-4 rounded-md"></div>
                  <h3 className="text-white text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Recommended for you</h3>
            <div className="mt-4 flex space-x-4">
              {recommendedItems.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 w-32 rounded-lg">
                  <div className="h-16 w-full bg-gray-700 mb-4 rounded-md"></div>
                  <h4 className="text-sm font-medium text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Charts Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Top Charts</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {topCharts.map((token, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-purple-400 text-xl font-bold">#{token.rank}</div>
                  <h4 className="text-sm font-medium text-white">{token.name}</h4>
                  <p className="text-xs text-gray-400">{token.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (New Arrivals) */}
        <div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400">New Arrivals</h3>
            <ul className="mt-4 space-y-4">
              {newArrivals.map((token, index) => (
                <li key={index} className="flex justify-between items-center text-white">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-gray-700 rounded-md"></div>
                    <div>
                      <span className="text-sm font-medium">{token.name}</span>
                      <p className="text-xs text-gray-400">{token.symbol}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{token.price}</p>
                    <span className={`${token.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}