import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // Use an appropriate icon
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactsIcon from '@mui/icons-material/Contacts';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';

type Route = {
  text: string;
  path: string;
  icon: ElementType<SvgIconProps>;
  isSelected: boolean;
};

type Routes = {
  mainRoutes: Route[];
};

const routes: Routes = {
  mainRoutes: [
    {
      text: 'Dashboard',
      path: '#',
      icon: DashboardIcon,
      isSelected: true,
    },
    {
      text: 'MyWallet',
      path: '#wallet',
      icon: AccountBalanceWalletIcon,
      isSelected: false,
    },
    {
      text: 'MyTemplates',
      path: '#templates',
      icon: LibraryBooksIcon,
      isSelected: false,
    },
    {
      text: 'Notifications',
      path: '#notifications',
      icon: NotificationsIcon,
      isSelected: false,
    },
    {
      text: 'Contacts',
      path: '#contacts',
      icon: ContactsIcon,
      isSelected: false,
    }
  ]
};

export default routes;
export type { Routes, Route };
