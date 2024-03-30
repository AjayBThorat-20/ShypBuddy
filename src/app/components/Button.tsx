'use client'

import React from 'react';
// import LoadingAnimation from './LoadingAnimation';

type ButtonSolidProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  outlineButton?: boolean;
};

const Button = ({ buttonText, type = "button", isLoading = false, disabled = false, onClick, className, outlineButton = false }: ButtonSolidProps ) => {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      className={`${className} min-w-[150px] h-10 md:h-12 ${outlineButton ? 'text-[#E94C69] ring-1 ring-inset ring-[#E94C69]' :'bg-[#E94C69] text-white' } px-2 md:px-4 hover:bg-red-200 font-medium py-2 md:py-3 rounded-md whitespace-nowrap ${(isLoading || disabled) ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {/* {isLoading ? <LoadingAnimation /> : buttonText} */}

      {isLoading ? "Loading..." : buttonText}
    </button>
  );
};

export default Button;