// CommentSuccessDialog.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommentSuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const thankYouMessages = [
  "Thanks for sharing your thoughts! 🧠",
  "You're awesome for commenting! 💬",
  "Appreciate your feedback! 🙏",
  "Grateful for your voice here! 🎉",
  "Comment received loud and clear! 📣"
];

const CommentSuccessDialog: React.FC<CommentSuccessDialogProps> = ({ open, onClose }) => {
  const message = thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Comment Added ✅</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{message}</p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommentSuccessDialog;
