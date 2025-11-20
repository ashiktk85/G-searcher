import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE IMAGE (1/4 width) */}
      <div className="w-1/3 h-screen">
        <img
          src="https://images.pexels.com/photos/15539377/pexels-photo-15539377.jpeg"
          alt="side"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE LOGIN (3/4 width) */}
      <div className="w-3/4 h-screen flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center gap-2">
            {/* put your logo here if you want */}
            {/* <img src="/logo.svg" className="h-10" /> */}
            <h2 className="text-center text-3xl font-bold text-gray-900">
              ADMIN LOGIN
            </h2>
            <p className="mt-1 text-center text-sm text-gray-600">
              Sign in with your admin credentials
            </p>
          </div>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="relative mb-10">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  placeholder=" "                   
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    peer block w-full px-3 py-3
                    border-0 border-b border-gray-300
                    focus:border-blue-500
                    focus:outline-none
                    transition text-2xl
            "
                />
                <label
                  htmlFor="email"
                  className="
              absolute left-3 top-1/2 -translate-y-1/2 mb-5
              text-gray-500 text-lg
              pointer-events-none
              transition-all duration-200
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg
              peer-focus:top-1 peer-focus:text-sm
              peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-lg
            "
                >
                  Email
                </label>
              </div>

              {/* PASSWORD */}
              <div className="relative mb-10">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    peer block w-full px-3 py-3
                    border-0 border-b border-gray-300
                    focus:border-blue-500
                    focus:outline-none
                    transition
                    text-2xl
                  "
                />
                <label
                  htmlFor="password"
                  className="
              absolute left-3 top-1/2 -translate-y-1/2 mb-5
              text-gray-500 text-2xl
              pointer-events-none
              transition-all duration-200
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg
              peer-focus:top-1 peer-focus:text-sm
              peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-lg
              
            "
                >
                  Password
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
          w-full py-2 px-4 text-white py-4
          bg-[#133a5b] hover:bg-[#133a5b]/80
          rounded-md font-medium shadow
          disabled:opacity-50 cursor-pointer
        "
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>


    </div>
  );
};

export default Login;
