import DashboardIcon from '../Icons/v2/dashboardIcon';
import MyWalletIcon from '../Icons/v2/myWalletIcon';
import MyTemplateIcon from '../Icons/v2/myTemplateIcon';
import NotificationsIcon from '../Icons/v2/notificationsIcon';
import ContactsIcon from '../Icons/v2/contactsIcon';

type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  isSelected: boolean;
};

type Routes = {
  mainRoutes: Route[];
};

const routes: Routes = {
  mainRoutes: [
    {
      text: 'Dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
      isSelected: true,
    },
    {
      text: 'MyWallet',
      path: '/wallet',
      icon: MyWalletIcon,
      isSelected: false,
    },
    {
      text: 'MyTemplates',
      path: '/templates',
      icon: MyTemplateIcon,
      isSelected: false,
    },
    {
      text: 'Notifications',
      path: '/notifications',
      icon: NotificationsIcon,
      isSelected: false,
    },
    {
      text: 'Contacts',
      path: '/contacts',
      icon: ContactsIcon,
      isSelected: false,
    }
  ]
};

export default routes;
export type { Routes, Route };
