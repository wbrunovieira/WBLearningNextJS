'use client';

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Login
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Adcione o seu email e senha abaixo para acessar a
          plataforma de ensino WB
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <i
                className={`fas ${
                  showPassword ? 'fa-eye' : 'fa-eye-slash'
                } text-gray-500 dark:text-gray-400`}
              ></i>
            </span>
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            >
              Esqueceu a Senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
          >
            Acessar
          </button>
        </form>

        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Login;
