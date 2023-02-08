import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignAddNew from 'modules/campaign/CampaignAddNew';
import React from 'react';

const StartCampaignPage = () => {
  return (
    <div>
      <LayoutDashboard>
        <CampaignAddNew></CampaignAddNew>
      </LayoutDashboard>
    </div>
  );
};

export default StartCampaignPage;
