import { FaSearch, FaLock } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-14 bg-gray-900 px-4 shadow-lg rounded-lg">
      {/* Search Bar */}
      <div className="flex items-center w-1/2 bg-gray-800 p-2 rounded-md">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-gray-400 ml-2 w-full outline-none"
        />
      </div>

      {/* Connect Wallet Button */}
      <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition">
        Connect Wallet
      </button>

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Lock Icon */}
        <div className="relative">
          <FaLock className="text-gray-400" />
          <span className="absolute top-0 right-0 bg-white text-xs text-black p-1 rounded-full">1</span>
        </div>

        {/* Username and Profile ID */}
        <div className="text-white">
          <p className="font-semibold">Username</p>
          <p className="text-xs text-gray-400">Profile ID</p>
        </div>

        {/* Dropdown Icon */}
        <button>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;