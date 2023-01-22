import { IconFolder } from 'components/icon';
import React from 'react';
import { Link } from 'react-router-dom';
import CampCategory from './parts/CampCategory';

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <h3 className="mb-1 font-semibold text-text1">Powered Kits Learning Boxer</h3>
        <p className="mb-4 text-sm text-text3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quia?
        </p>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">$2,000</h4>
            <span className="text-xs text-text4">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">137</h4>
            <span className="text-xs text-text4">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            className="object-cover w-8 h-8 rounded-full"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <p className="text-xs text-text3">
            By <span className="font-semibold text-text2">Suleng</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
