'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
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
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full border px-3 py-2 rounded mt-1"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Log In
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
