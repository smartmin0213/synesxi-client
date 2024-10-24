import React from 'react';

export default function Home() {
  const dAppCards = [
    { name: 'Helio', downloads: '12M downloads', price: '$52,291', change: '+0.25%' },
    { name: 'Honeyland', downloads: '8M downloads', price: '$52,291', change: '+0.25%' },
    { name: 'Drift Protocol', downloads: '4M downloads', price: '$52,291', change: '+0.25%' },
    { name: 'Elementarena', downloads: '2M downloads', price: '$52,291', change: '+0.25%' },
  ];

  const topCharts = [
    { rank: 1, name: 'Zignaly', price: '$3,245.03' },
    { rank: 2, name: 'Pip', price: '$3,245.03' },
    { rank: 3, name: 'Mean Finance', price: '$3,245.03' },
    { rank: 4, name: 'Helium HNT', price: '$3,245.03' },
    { rank: 5, name: 'Phantom', price: '$3,245.03' },
    { rank: 6, name: 'Ponce', price: '$3,245.03' },
    { rank: 7, name: 'Chainlink', price: '$3,245.03' },
    { rank: 8, name: 'Wormhole', price: '$3,245.03' },
  ];

  const dAppTable = [
    { name: 'Streamflow', balance: '$3.56M', users: '2500', change: '+12.00%', volume: '$65.20M' },
    { name: 'Dln', balance: '$3.56M', users: '2500', change: '+12.00%', volume: '$65.20M' },
    { name: 'Flipgg', balance: '$3.56M', users: '2500', change: '+12.00%', volume: '$65.20M' },
    { name: 'Honeyland', balance: '$3.56M', users: '1200', change: '+12.00%', volume: '$65.20M' },
    { name: 'Helio', balance: '$3.56M', users: '1200', change: '+12.00%', volume: '$65.20M' },
    { name: 'Elementarena', balance: '$3.56M', users: '1200', change: '+12.00%', volume: '$65.20M' },
    { name: 'Chingari', balance: '$3.56M', users: '1200', change: '+12.00%', volume: '$65.20M' },
    { name: 'Genopets', balance: '$3.56M', users: '1200', change: '+12.00%', volume: '$65.20M' },
  ];

  return (
    <div className="p-8 bg-gray-800 min-h-screen text-white">
      {/* Discover DApps Section */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Discover DApps</h2>
        <p className="text-sm text-gray-400 mb-6">Experience more in the decentralized web</p>
        <div className="grid grid-cols-4 gap-4">
          {dAppCards.map((dApp, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="h-10 w-10 bg-gray-700 rounded-md mb-2"></div>
              <h3 className="text-lg font-semibold">{dApp.name}</h3>
              <p className="text-sm text-gray-400">{dApp.downloads}</p>
              <p className="text-xl">{dApp.price}</p>
              <p className="text-green-400">{dApp.change}</p>
              <div className="h-16 w-full bg-gray-600 mt-2 rounded"></div> {/* Placeholder for chart */}
            </div>
          ))}
        </div>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Browse All DApps</button>
      </div>

      {/* News Update Tabs */}
      <div className="flex justify-between bg-gray-900 p-4 mt-6 rounded-lg">
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
        <button className="text-sm text-gray-300 hover:text-white">Solana News Update</button>
      </div>

      {/* Top Charts Section */}
      <div className="flex justify-between mt-6">
        <div className="bg-gray-900 p-6 rounded-lg w-2/3">
          <h3 className="text-lg font-semibold">Top Charts</h3>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {topCharts.map((chart, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="h-10 w-10 bg-gray-700 rounded-md mb-2"></div>
                <h4 className="text-sm font-semibold">{chart.name}</h4>
                <p className="text-xs text-gray-400">#{chart.rank}</p>
                <p className="text-lg">{chart.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Gainers / Losers */}
        <div className="bg-gray-900 p-6 rounded-lg w-1/3">
          <div className="flex justify-between mb-4">
            <button className="text-sm text-purple-400">Top Gainers</button>
            <button className="text-sm text-gray-400">Top Losers</button>
          </div>
          <ul>
            {topCharts.slice(0, 5).map((chart, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{chart.name}</span>
                <span className="text-green-400">+12.00%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DApp Table Section */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">All DApps</h3>
          <div className="flex space-x-2">
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Newly Listed</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Hot DApps</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Top Gainers</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Top Losers</button>
            <button className="bg-gray-800 px-4 py-2 text-sm rounded">Other Categories</button>
          </div>
        </div>

        {/* DApp Table */}
        <table className="w-full mt-4 table-auto text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">DApp</th>
              <th className="py-2">Balance</th>
              <th className="py-2">Users</th>
              <th className="py-2">Change</th>
              <th className="py-2">24h Volume</th>
              <th className="py-2">Chart</th>
            </tr>
          </thead>
          <tbody>
            {dAppTable.map((dApp, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{dApp.name}</td>
                <td className="py-2">{dApp.balance}</td>
                <td className="py-2">{dApp.users}</td>
                <td className="py-2 text-green-400">{dApp.change}</td>
                <td className="py-2">{dApp.volume}</td>
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
              <button className="bg-gray-700 px-3 py-2 rounded">399</button>
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