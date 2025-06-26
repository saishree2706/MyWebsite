// components/SubscribeStats.tsx
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const SubscribeStats: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [cached, setCached] = useState(false);

  useEffect(() => {
    const cachedCount = localStorage.getItem('subscriber_count');
    if (cachedCount) {
      setCount(Number(cachedCount));
      setCached(true);
    }

    if (!cachedCount) {
      fetch('/api/subscriber-count')
        .then(res => res.json())
        .then(data => {
          setCount(data.count);
          localStorage.setItem('subscriber_count', data.count.toString());
        })
        .catch(() => setCount(0));
    }
  }, []);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (typeof e.detail === 'number') {
        setCount(prev => {
          const updated = (prev ?? 0) + e.detail;
          localStorage.setItem('subscriber_count', updated.toString());

          // 🎉 Trigger confetti animation
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });

          return updated;
        });
      }
    };
    window.addEventListener('subscriber::increment', handler as EventListener);
    return () => window.removeEventListener('subscriber::increment', handler as EventListener);
  }, []);

  return (
    <div className="mt-4 text-center">
      {count !== null ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-all duration-500">
          {count === 0 ? (
            <>✨ Be the <span className="font-semibold text-purple-600 dark:text-purple-400">first</span> to subscribe!</>
          ) : count === 1 ? (
            <>🎉 <span className="text-purple-600 dark:text-purple-400 font-semibold">1</span> user has already subscribed!</>
          ) : (
            <>🎉 <span className="text-purple-600 dark:text-purple-400 font-semibold">{count.toLocaleString()}</span> users have already subscribed!</>
          )}
        </p>
      ) : (
        <p className="text-sm text-gray-400 italic animate-pulse">Loading subscribers...</p>
      )}
    </div>
  );
};

export default SubscribeStats;
