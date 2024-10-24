import React from 'react';

export default function Tokens() {
  const tokenCards = [
    { name: 'Tether', price: '$52,291', change: '+0.25%', chart: 'line' },
    { name: 'Bonk', price: '$52,291', change: '+0.25%', chart: 'line' },
    { name: 'Trump', price: '$52,291', change: '+0.25%', chart: 'line' },
    { name: 'TNSR', price: '$52,291', change: '+0.25%', chart: 'line' },
  ];

  const tokenTable = [
    { name: 'Tether', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'Radium', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'Maga Trump', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'MYRO', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'MEW', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'Helium HNT', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'Chainlink', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
    { name: 'Solana', marketCap: '$3.56M', price: '$3.00', change: '+12.00%', volume: '$65.20M' },
  ];

  return (
    <div className="p-8 bg-gray-800 min-h-screen text-white">
      {/* Discover Tokens Section */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Discover Tokens</h2>
        <p className="text-sm text-gray-400 mb-6">Experience more in the decentralized web</p>
        <div className="grid grid-cols-4 gap-4">
          {tokenCards.map((token, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="h-10 w-10 bg-gray-700 rounded-md mb-2"></div>
              <h3 className="text-lg font-semibold">{token.name}</h3>
              <p className="text-xl">{token.price}</p>
              <p className="text-green-400">{token.change}</p>
              <div className="h-16 w-full bg-gray-600 mt-2 rounded"></div> {/* Placeholder for chart */}
            </div>
          ))}
        </div>
      </div>

      {/* News Update Tabs */}
      <div className="flex justify-between bg-gray-900 p-4 mt-6 rounded-lg">
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
      </div>

      {/* Token Table Section */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Newly Listed</h3>
          <div className="flex space-x-2">
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Newly Listed</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Hot Tokens</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Top Gainers</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Top Losers</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Fear Index</button>
          </div>
        </div>

        {/* Token Table */}
        <table className="w-full mt-4 table-auto text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Coin</th>
              <th className="py-2">Market Cap</th>
              <th className="py-2">Coin Price</th>
              <th className="py-2">Change</th>
              <th className="py-2">24h Volume</th>
              <th className="py-2">Chart</th>
            </tr>
          </thead>
          <tbody>
            {tokenTable.map((token, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{token.name}</td>
                <td className="py-2">{token.marketCap}</td>
                <td className="py-2">{token.price}</td>
                <td className="py-2 text-green-400">{token.change}</td>
                <td className="py-2">{token.volume}</td>
                <td className="py-2">
                  <div className="h-4 w-16 bg-gray-600 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-3 gap-8 mt-6">
        <div className="bg-gray-900 p-6 rounded-lg col-span-2">
          <div className="flex justify-between items-center">
            <p className="text-sm">Showing 1 to 10 of 4769 results</p>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-700 px-3 py-2 rounded">1</button>
              <button className="bg-gray-700 px-3 py-2 rounded">2</button>
              <button className="bg-gray-700 px-3 py-2 rounded">3</button>
              <span>...</span>
              <button className="bg-gray-700 px-3 py-2 rounded">300</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-400">Analytics</h3>
          <div className="mt-4">
            <p className="text-sm text-gray-300 mb-2">Greed Index</p>
            <div className="h-16 bg-gray-700 rounded mb-4"></div> {/* Placeholder for Greed Index */}
            <p className="text-sm text-gray-300 mb-2">Allocation</p>
            <div className="h-32 bg-gray-700 rounded mb-4"></div> {/* Placeholder for Allocation */}
            <div className="h-32 bg-gray-800 rounded flex items-center justify-center text-gray-400">
              YOUR ADS GOES HERE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}