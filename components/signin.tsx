const Signin = () => {
  return (
    <div className="flex items-center justify-center w-[1207px]">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-2">Get started</h1>
        <p className="text-center text-gray-400 mb-6">
          Login or create a new account
        </p>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-gray-800 text-gray-400 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 text-gray-400 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:from-pink-500 hover:to-purple-500 transition-all">
          Login
        </button>

        <div className="mt-6 text-center text-gray-400">
          <p className="mb-2">Don’t have an account?</p>
          <button className="w-full py-3 bg-gray-800 text-white font-semibold rounded-md border border-gray-600 hover:bg-gray-700">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;