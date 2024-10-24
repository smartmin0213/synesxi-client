import { FaTelegramPlane, FaLinkedin, FaTimesCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400 p-8 mt-16'>
      <div className='max-w-7xl mx-auto flex justify-between items-start'>
        {/* Left Section */}
        <div className='flex flex-col space-y-4'>
          <h2 className='text-lg font-medium'>
            Your Gateway to a better and seamless Web3 Experience
          </h2>
        </div>

        {/* Right Section */}
        <div className='flex flex-col space-y-4'>
          <h3 className='text-sm font-semibold text-gray-500'>Resources</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-white'>About Us</a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>Blog</a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 mt-8 pt-4 flex justify-between items-center'>
        {/* Copyright */}
        <p className='text-gray-500 text-sm'>© 2024 Synesxi</p>

        {/* Social Media Icons */}
        <div className='flex space-x-4'>
          <FaTimesCircle className='w-6 h-6 text-gray-400 hover:text-white' />
          <FaTelegramPlane className='w-6 h-6 text-gray-400 hover:text-white' />
          <FaLinkedin className='w-6 h-6 text-gray-400 hover:text-white' />
          {/* Add other icons if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;