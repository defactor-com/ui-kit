import {
  BookClosed,
  Grid01,
  LayoutAlt01,
  Wallet02
} from '@untitled-ui/icons-react'

import CoinsArteIcon from './coinsArteIcon'

const routes = {
  mainRoutes: [
    {
      icon: Grid01,
      text: 'dashboard',
      path: '/'
    },
    {
      icon: Wallet02,
      text: 'myWallet',
      path: '/wallet'
    },
    {
      icon: CoinsArteIcon,
      text: 'arte',
      path: '/arte'
    },
    {
      icon: LayoutAlt01,
      text: 'myTemplates',
      path: '/templates'
    },
    {
      icon: BookClosed,
      text: 'contacts',
      path: '/contacts'
    }
  ],
  mobileRoutes: [
    {
      icon: Grid01,
      text: 'dashboard',
      path: '/'
    },
    {
      icon: Wallet02,
      text: 'myWallet',
      path: '/wallet'
    },
    {
      icon: CoinsArteIcon,
      text: 'arte',
      path: '/arte'
    },
    {
      icon: LayoutAlt01,
      text: 'myTemplates',
      path: '/templates'
    },
    {
      icon: BookClosed,
      text: 'contacts',
      path: '/contacts'
    }
  ]
}

export default routes
