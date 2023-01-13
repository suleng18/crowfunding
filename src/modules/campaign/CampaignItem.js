import { IconFolder } from 'components/icon';
import React from 'react';
import { Link } from 'react-router-dom';

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link to="/" className="flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4">
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <h3 className="font-semibold text-text1 mb-1">Powered Kits Learning Boxer</h3>
        <p className="text-sm mb-4 text-text3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quia?
        </p>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">$2,000</h4>
            <span className="text-text4 text-xs">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">137</h4>
            <span className="text-text4 text-xs">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <p className="text-xs text-text3">
            By <span className="text-text2 font-semibold">Suleng</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
