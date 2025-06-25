'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpModal() {
  //  SHOW TOAST MESSAGE IF USER IS REGISTERED SUCCESSFULLY

  const registerSuccess = () => {
    toast.success("User resgistered successfully !", {
      position: "top-right"
    });}

    // Show toast message if user email already exists
  const emailExistMsg = (msg) => {
    toast.error(msg, {
      position: "top-right"
    });}
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false)
  const [errors, setErrors] = useState({ email: '', password: '', exists:'' });

  const toggleModal = () => setIsOpen(!isOpen);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = { email: '', password: '', exists:'' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== '');
    if (!hasError) {
      setLoading(true)
      console.log('Form is valid. Submitting:', { email, password });

      // Example: send to backend here
      const res = await fetch('/api/signUp', {

        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      if(res.ok){
        console.log(res)
        setLoading(false)
        registerSuccess()
        // isOpen(false)
      }
      else if(res.status===400){
        setLoading(false)
        console.log(res)
        emailExistMsg("User Email already exists !")
      }

      else if(res.status===500){
        setLoading(false)
        console.log(res)
        emailExistMsg("Error occured, user not registered !")
      }

      // Reset form or close modal
      setEmail('');
      setPassword('');
      // setIsOpen(false);
    }
  };

  return (
    <>
    <ToastContainer/>
      <button
        onClick={toggleModal}
        className="bg-emerald-950 text-white py-[10px] px-[15px] rounded-xl hover:bg-blue-700"
      >
        Sign Up
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black p-6 rounded-lg w-full max-w-md shadow-lg relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={toggleModal}
                className="absolute top-2 right-3 text-gray-600 hover:text-white text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>

                
                  {errors.exists && (
                    <p className="text-red-500 text-sm mt-1">{errors.exists}</p>
                  )}
                
                <div>
                  <label className="block text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">Password</label>
                  <input
                    type="password"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                 {loading ? "loading..." :"sign up"}
                </button>

                <button
                  type="button"
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                  Sign up with Google
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
