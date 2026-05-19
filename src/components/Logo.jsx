import React from 'react';

const Logo = ({ size = 40, variant = 'light' }) => {
  const color = variant === 'light' ? '#ffffff' : '#1e3a8a';
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="10" fill="none" />
      {/* Inner circle */}
      <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="10" fill="none" />
      {/* Diagonal slash top-left to bottom-right */}
      <line x1="30" y1="170" x2="170" y2="30" stroke={color} strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;
