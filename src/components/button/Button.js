import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, className = '' }) => {
  return (
    <button
      className={`flex justify-center text-white p-4 text-base font-semibold rounded-xl ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
