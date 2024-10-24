"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900/75 to-gray-900">
      <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="bg-[#1C1E22] px-10 py-16 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-3xl font-bold text-white text-center mb-2">Get started</h1>
          <p className="text-white text-center mb-8">Login or create a new account</p>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded bg-[#1C1E22] border border-gray-400 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-[#1C1E22] border border-gray-400 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            />
            <span className="absolute right-3 top-3">
              <Image
                src="/assets/eye-slash.png"
                alt="eye-slash"
                width={24}
                height={24}
              />
            </span>
          </div>

          <button
            className="w-full p-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 mb-4">
            Login
          </button>

          <p className="text-gray-500 text-center mb-4">
            Don’t have an account?
          </p>

          <button onClick={() => router.push('/register')} className="w-full p-3 text-white font-semibold rounded-lg bg-gray-800 hover:bg-gray-700">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}