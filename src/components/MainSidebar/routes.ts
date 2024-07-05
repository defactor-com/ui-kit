type Route = {
  text: string;
  path: string;
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
      isSelected: true,
    },
    {
      text: 'MyWallet',
      path: '#wallet',
      isSelected: false,
    },
    {
      text: 'MyTemplates',
      path: '#templates',
      isSelected: false,
    },
    {
      text: 'Notifications',
      path: '#notifications',
      isSelected: false,
    },
    {
      text: 'Contacts',
      path: '#contacts',
      isSelected: false,
    }
  ]
};

export default routes;
export type { Routes, Route };
