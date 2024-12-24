import React from 'react'

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="mt-6">
          <ul className="space-y-4">
            <li>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
            </li>
            
            <li>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Enter your password"
                />
              </div>
            </li>
            
            <li>
              <button className="w-full px-4 py-2 mt-4 text-white bg-primary rounded-md hover:bg-primary-dark">
                Login
              </button>
            </li>
            
            <li>
              <p className="mt-4 text-center text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-primary hover:text-primary-dark">
                  Sign up
                </a>
              </p>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}
