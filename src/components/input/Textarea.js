import React from 'react';
import { useController } from 'react-hook-form';

const Textarea = (props) => {
  const { control, name, placeholder = '', children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border outline-none text-text1 rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px]"
      placeholder={placeholder}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default Textarea;
