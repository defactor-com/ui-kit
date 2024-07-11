import DashboardIcon from '../Icons/v2/dashboardIcon';
import MyWalletIcon from '../Icons/v2/myWalletIcon';
import MyTemplateIcon from '../Icons/v2/myTemplateIcon';
import NotificationsIcon from '../Icons/v2/notificationsIcon';
import ContactsIcon from '../Icons/v2/contactsIcon';

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
};

export type Routes = {
  mainRoutes: Route[];
};

export const routes: Routes = {
  mainRoutes: [
    {
      text: 'Dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      text: 'MyWallet',
      path: '/wallet',
      icon: MyWalletIcon,
    },
    {
      text: 'MyTemplates',
      path: '/templates',
      icon: MyTemplateIcon,
    },
    {
      text: 'Notifications',
      path: '/notifications',
      icon: NotificationsIcon,
    },
    {
      text: 'Contacts',
      path: '/contacts',
      icon: ContactsIcon,
    },
  ],
};
