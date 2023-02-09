import { Button } from 'components/button';
import React from 'react';
import CampCategory from './parts/CampCategory';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import CampMeta from './parts/CampMeta';
import CampTitle from './parts/CampTitle';
import CampViewAuthor from './parts/CampViewAuthor';

const CampaignView = () => {
  return (
    <div>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32,18,63,0) -7.14%, #000000 87.01%), url(https://source.unsplash.com/random)`,
        }}
      >
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
    </div>
  );
};

export default CampaignView;
