import { IconFolder } from 'components/icon';
import React from 'react';
import { Link } from 'react-router-dom';

const CampCategory = ({ text = 'Education' }) => {
  return (
    <Link to="/" className="flex items-baseline mb-4 text-xs font-medium gap-x-3 text-text3">
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
