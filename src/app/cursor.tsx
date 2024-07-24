"use client"
import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Introduce a slight delay (e.g., 50ms) to create lag
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50); // Adjust the delay time as needed
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed z-[999] bg-black bg-opacity-60 rounded-full w-12 h-12 pointer-events-none"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, -50%)',
      }}
    ></div>
  );
};

export default CursorFollower;
