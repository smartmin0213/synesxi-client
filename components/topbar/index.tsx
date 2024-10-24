'use client';

import Image from 'next/image';

export default function Topbar() {
  return (
    <div className='flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow-lg w-full'>
      {/* Search Bar */}
      <div className='flex items-center bg-gray-800 text-gray-400 rounded-lg p-2 w-1/2'>
        <span className='text-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M12.9 14.32a8 8 0 111.42-1.42l4.68 4.68a1 1 0 01-1.42 1.42l-4.68-4.68zM8 14a6 6 0 100-12 6 6 0 000 12z' clipRule='evenodd' />
          </svg>
        </span>
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent outline-none px-2 text-gray-300 w-full'
        />
      </div>

      {/* Connect Wallet Button */}
      <button className='ml-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-500'>
        Connect Wallet
      </button>

      {/* Profile Section */}
      <div className='ml-4 flex items-center bg-gray-800 py-2 px-4 rounded-lg cursor-pointer'>
        <Image
          src='/assets/user-avatar.png' // Replace with your actual avatar image path
          alt='User Avatar'
          width={32}
          height={32}
          className='rounded-full'
        />
        <div className='ml-2'>
          <p className='text-white text-sm'>Username</p>
          <p className='text-gray-400 text-xs'>profile ID</p>
        </div>
        <span className='ml-2 text-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
          </svg>
        </span>
      </div>
    </div>
  );
}