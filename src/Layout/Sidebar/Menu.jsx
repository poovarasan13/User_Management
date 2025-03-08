export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Users',
        icon: 'user',
        type: 'sub',
        children: [
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/dashboard`,
            title: 'Dashboard',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/user-list`,
            title: 'User List',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/user-list`,
            title: 'Category',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/user-list`,
            title: '',
            type: 'link',
          },
        ],
      },
      {
        title: 'Support Ticket',
        icon: 'support-tickets',
        type: 'sub',
        children: [
          {
            active: false,
            path: `http://support.pixelstrap.com/help-center`,
            title: 'Rise Ticket',
            type: 'link',
          },
        ],
      },
    ],
  },
];
