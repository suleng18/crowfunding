import { IconFolder } from 'components/icon';
import React from 'react';
import { Link } from 'react-router-dom';

const CampCategory = ({ text = 'Education', className = 'text-xs' }) => {
  return (
    <Link
      to="/"
      className={`flex items-baseline mb-4 text-xs font-medium gap-x-3 text-text3 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;

// 384
