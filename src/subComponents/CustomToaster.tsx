// components/CustomToaster.tsx
import React from 'react';
import { Toaster } from 'react-hot-toast';

const CustomToaster: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 6000,
        style: {
          background: '#1F2937',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          borderRadius: '0.75rem',
          padding: '14px 20px',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#D1FAE5',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#FECACA',
          },
        },
      }}
    />
  );
};

export default CustomToaster;
