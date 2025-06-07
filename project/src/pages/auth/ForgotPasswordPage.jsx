// // src/pages/auth/ForgotPasswordPage.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import Navbar from '../../components/layout/Navbar';
// import Footer from '../../components/layout/Footer';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { resetPassword } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');
//     setLoading(true);

//     try {
//       await resetPassword(email);
//       setMessage('Check your email for password reset instructions.');
//     } catch (err) {
//       setError('Failed to send reset email. Make sure the email is registered.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen items-center justify-center px-4 py-20">
//         <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded shadow-lg">
//           <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

//           {message && <div className="mb-4 text-green-600">{message}</div>}
//           {error && <div className="mb-4 text-red-600">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="email"
//               placeholder="Enter your registered email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input w-full"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="btn btn-primary w-full"
//             >
//               {loading ? 'Sending...' : 'Send Reset Link'}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <Link to="/login" className="text-sm text-primary-500 hover:underline">
//               Back to Login
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ForgotPasswordPage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      await resetPassword(email);
      setMessage('Check your email for password reset instructions.');
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email. Please check and try again.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError('Failed to send reset email. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

          {message && (
            <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              {message}
            </div>
          )}
          {error && (
            <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Enter your registered email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-primary-500 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
