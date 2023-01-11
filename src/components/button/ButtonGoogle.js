import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';

const ButtonGoogle = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 border gap-x-3 border-strock rounded-xl dark:border-darkStroke "
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span className="text-base font-semibold text-text2 dark:text-white">{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
