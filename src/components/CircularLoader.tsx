import React from 'react';

const CircularLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-12 w-12" viewBox="0 0 50 50">
        <circle
          className="opacity-20"
          cx="25"
          cy="25"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          className="[stroke-dasharray:90,150] [stroke-dashoffset:0] [stroke-linecap:round]"
          cx="25"
          cy="25"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="6"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#a21caf" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CircularLoader;
