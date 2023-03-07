import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignView from 'modules/campaign/CampaignView';
import CampaignPage from 'pages/CampaignPage';
import DashboardPage from 'pages/DashboardPage';
import StartCampaignPage from 'pages/StartCampaignPage';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Modal from 'react-modal';
import LayoutPayment from 'layout/LayoutPayment';
import CheckoutPage from 'pages/CheckoutPage';
import ShippingPage from 'pages/ShippingPage';
// const SignUpPage = lazy(() => import('./pages/SignUpPage'));

const customStyles = {
  content: {},
};

Modal.setAppElement('#root');
Modal.defaultStyles = {};

function App() {
  return (
    <Routes>
      <Route element={<LayoutDashboard></LayoutDashboard>}>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route path="/start-campaign" element={<StartCampaignPage></StartCampaignPage>}></Route>
        <Route path="/campaign/:slug" element={<CampaignView></CampaignView>}></Route>
      </Route>
      <Route element={<LayoutPayment></LayoutPayment>}>
        <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
        <Route path="/shipping-address" element={<ShippingPage></ShippingPage>}></Route>
      </Route>
      <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/login" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;

// 398
