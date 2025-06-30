import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  title: string;
  styles: string;
  icon?: IconType;
  handleClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  styles, 
  icon, 
  handleClick,
  disabled = false,
  ariaLabel
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 sm:gap-2 rounded-full text-sm text-white px-3 sm:px-4 py-2 tracking-widest transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${styles}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || title}
    >
      <span className="text-xs sm:text-sm">{title}</span>
      {icon && React.createElement(icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
    </button>
  );
};

export default Button;