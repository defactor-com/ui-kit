import localFont from 'next/font/local'

export const DMSans = localFont({
  display: 'swap',
  preload: true,
  src: [
    {
      path: '../../../public/fonts/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/DMSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/DMSans-Black.ttf',
      weight: '800',
      style: 'normal'
    }
  ]
})
