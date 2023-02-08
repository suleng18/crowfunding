import CampaignPage from 'pages/CampaignPage';
import DashboardPage from 'pages/DashboardPage';
import StartCampaignPage from 'pages/StartCampaignPage';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

// const SignUpPage = lazy(() => import('./pages/SignUpPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
      <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
      <Route path="/start-campaign" element={<StartCampaignPage></StartCampaignPage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
