import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from 'components/icon';
import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: 'Campaign',
    url: '/campaign',
  },
  {
    icon: <IconPayment></IconPayment>,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: 'Withdraw',
    url: '/withdraw',
  },
  {
    icon: <IconProfile></IconProfile>,
    title: 'Profile',
    url: '/profile',
  },
  {
    icon: <IconLogout></IconLogout>,
    title: 'Logout',
    url: '#',
    onClick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: 'Light/Dark',
    url: '#',
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col flex-shrink-0 w-full md:w-[76px] rounded-3xl bg-red-50 shadow-[10px_10px_20xp_rgba(218,_213,_213,_0.15)] px-[14px] py-10">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary"
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
