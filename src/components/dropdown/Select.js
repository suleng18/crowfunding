import React from 'react';
import { useDropdown } from './dropdown-context';

const Select = ({ placeholder = '', className = '' }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 bg-white border border-strock text-text1 rounded-xl cursor-pointer font-medium ${className}`}
      onClick={toggle}
    >
      <span className="text-sm">{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
