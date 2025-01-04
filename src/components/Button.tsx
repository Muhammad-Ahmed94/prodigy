import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
  title: string;
  styles: string;
  icon?: IconType;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, styles, icon, handleClick }) => {
  return (
    <div>
      <button
        className={`flex-align-center gap-1 rounded-full text-sm text-white p-2 tracking-widest ${styles}`}
        onClick={handleClick}
      >
        {title}
        {icon && React.createElement(icon)}
      </button>
    </div>
  );
};

export default Button