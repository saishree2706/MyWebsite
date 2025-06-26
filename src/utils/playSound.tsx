// utils/playSound.ts

const playSound = (type: 'success' | 'error') => {
  const audio = new Audio(`/${type}.mp3`);
  audio.volume = 0.6;
  audio.play().catch(() => {
    // Prevent crashes on autoplay block
  });
};

export default playSound;
