'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function SignInModal() {
  const router=useRouter()
  const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', exists:'' });
    const [loading,setLoading]=useState(false)


    // invalid mesage
     const errorMessage = () => {
        toast.error("Invalid Credentials !", {
          position: "top-right"
        });}


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
    if(!password){
      newErrors.password="Fill in your password"
    }

   

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== '');
    if (!hasError) {
      setLoading(true)
      // using the next auth method
      const res=await signIn("credentials",{
       email,
       password,
       redirect:false
      })
      console.log(res)
      if(res.ok){
        console.log(res)
        setLoading(false)
        router.replace('/write')

    
        // isOpen(false)
      }
      else{
        setLoading(false)
        console.log(res)
        errorMessage()
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
        Sign In
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
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-4">Sign In</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    
                  />
                   {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    
                  />
                   {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                <button 
                  disabled={loading ? true :false}
                  type="submit"
                  className={`w-full ${loading? 'bg-gray-600' : 'bg-blue-600'  } text-white py-2 rounded${loading ? " hover:bg-gray-500" : 'hover:bg-blue-400'} `}

                 
                >
                 {loading ? "processing..." :"log in"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
