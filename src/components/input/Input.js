import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';

const Input = (props) => {
  const { control, name, error = '', type = 'text', placeholder, children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border bg-transparent text-text1 rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white
        ${error.length > 0 ? 'border-error' : 'border-strock dark:border-darkStroke'} 
        ${children ? 'pr-16' : ''}`}
        placeholder={error.length <= 0 ? placeholder : ''}
        {...field}
        {...rest}
      />

      {error.length > 0 && (
        <span className="absolute top-2/4 -translate-y-[50%] left-6 text-sm font-medium text-error pointer-events-none error-input">
          {error}
        </span>
      )}

      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-[50%] cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
