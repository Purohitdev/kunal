// components/MagnetButton.tsx
import React, { useRef, useEffect } from 'react';

interface MagnetButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagnetButton: React.FC<MagnetButtonProps> = ({ children, className = '', onClick }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetPosition = () => {
      if (button) {
        button.style.transform = 'translate(0px, 0px)';
      }
    };

    if (button) {
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', resetPosition);
    }

    return () => {
      if (button) {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', resetPosition);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`bg-[#2B2B2B] text-[#FDEEE6] px-5 py-2.5 rounded-full text-base md:text-lg font-semibold hover:scale-105 transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};

export default MagnetButton;
