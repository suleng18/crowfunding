import { IconFolder } from 'components/icon';
import React from 'react';
import { Link } from 'react-router-dom';
import CampAuthor from './parts/CampAuthor';
import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxers</CampTitle>
        <CampDesc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quia?
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta amount="137" text="Total backerss"></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
