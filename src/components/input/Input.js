import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

const Input = ({ placeholder, control, name, type }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <div className="relative">
      <input
        type={type}
        className="w-full px-6 py-4 text-sm font-medium border text-text1 border-strock rounded-xl placeholder:text-text4"
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
