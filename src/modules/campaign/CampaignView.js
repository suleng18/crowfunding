import { Button } from 'components/button';
import React from 'react';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';
import CampaignPerk from './CampaignPerk';
import CampaignSupport from './CampaignSupport';
import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';
import CampViewAuthor from './parts/CampViewAuthor';

const CampaignView = () => {
  return (
    <>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
        <h1>Education</h1>
      </div>
      <div className="flex items-start w-full gap-x-10 max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  className="object-cover w-[89px] h-[70px] rounded-lg"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Film" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency in the face of
            urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">Back this project</Button>
        </div>
      </div>
      <div className="flex justify-between mt-[100px] items-center bg-white p-5 border-b border-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium text-text3 gap-x-14">
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button className="text-white bg-primary">Back this project</Button>
      </div>

      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">You also may be interested in</h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;
