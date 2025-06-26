import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles } from 'lucide-react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const triggerCelebration = () => {
    // Multiple confetti bursts
    const colors = ['#3B82F6', '#8B5CF6', '#F97316', '#10B981'];
    
    // First burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

    // Second burst from left
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors
      });
    }, 200);

    // Third burst from right
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors
      });
    }, 400);

    // Final burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.4 },
        colors: colors
      });
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    // Store user data
    const userData = {
      name: name.trim(),
      email: email.trim(),
      visitDate: new Date().toISOString()
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('hasVisited', 'true');

    // Trigger celebration
    triggerCelebration();

    // Play celebration sound (browser dependent)
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAUBjiX2/LRei8FKoXL8diLOQgaN7vt4pNLAAxSneftj1YOB1Kg4O6qXBkHJoX9++++YxYGOJLR8s+AKwY6hdTy1oQyBSOBzPDfhzEIHm2+7d2ER0UKRqHa7bqAHwQznM/20IAnBC9+zO/kfkkBMnHN8s+DNgUhm9nvzoI5Bg9Sren0pmIWCjyWzPLKfysFJpDJ8NeGMggef9Ds2G4iBTONzfLzfywJK4HM8deMNgcab8Dm3oNHVhsKPJPN8s5/KwUnkMnw14YyAxiF1PCyZRwGPJfP8suBNgcjg8nw34gwBx9u5fLdiDIIDjCK2vHNaTUOJnPF8MyKPwotdt3z2I81Bit9zPDQcCsFL4TL8M96LQUcfcnw3IY2CCBw2fLPfzAFNoja8s99LQYFKojH8N+GOwcifczw34g5BiBu2e7QdCgAMH/M7tWCNAcmeMHw3HUtBRd3wfDOeEMGLnPN8c59LQUIKYnH8N+GOwciedfx4YU3ByZ1yPDOfjMEPXHL8MWGTQUfcs7r3II5CSZ1yPDOfiMEPXHL8MWGQwcmeMzw1oQxByqOx+7bfDMFKn7N79qAOAUue9Xz2ZA8ByZ4yPDbfzEEPXHL8MWGTAceaM7s3IIzBSZ1yPDPfj');
      audio.play().catch(() => {});
    } catch (error) {
      console.log('Audio not supported');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-gray-200/20 dark:border-white/20 animate-bounce-in">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to MyWorld!</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm so excited to have you here! Let me know who you are so I can give you the best experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim() || isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Celebrating...</span>
              </div>
            ) : (
              'Let\'s Celebrate! 🎉'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeModal;