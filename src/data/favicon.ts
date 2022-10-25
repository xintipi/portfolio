export interface Favicon {
  type: string
  sizes: string
  rel: string
  href: string
}

export interface FaviconObject {
  [key: string]: Favicon[]
}

export const favicon: FaviconObject = {
  icon: [
    {
      type: 'image/png',
      sizes: '16x16',
      rel: 'icon',
      href: 'https://i.ibb.co/58BpJgP/favicon-16.png',
    },
    {
      type: 'image/png',
      sizes: '32x32',
      rel: 'icon',
      href: 'https://i.ibb.co/VqNBMxR/favicon-32.png',
    },
    {
      type: 'image/png',
      sizes: '96x96',
      rel: 'icon',
      href: 'https://i.ibb.co/KNLYv0N/favicon-96.png',
    },
  ],
  appleIcon: [
    {
      type: 'image/png',
      sizes: '57x57',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/j562qZW/apple-touch-icon-57.png',
    },
    {
      type: 'image/png',
      sizes: '60x60',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/YjdGnp0/apple-touch-icon-60.png',
    },
    {
      type: 'image/png',
      sizes: '72x72',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/D1whWQQ/apple-touch-icon-72.png',
    },
    {
      type: 'image/png',
      sizes: '76x76',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/rkdYGQQ/apple-touch-icon-76.png',
    },
    {
      type: 'image/png',
      sizes: '114x114',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/cxmGjcJ/apple-touch-icon-114.png',
    },
    {
      type: 'image/png',
      sizes: '120x120',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/6NmDsqZ/apple-touch-icon-120.png',
    },
    {
      type: 'image/png',
      sizes: '144x144',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/S747s11/apple-touch-icon-144.png',
    },
    {
      type: 'image/png',
      sizes: '152x152',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/270fCxW/apple-touch-icon-152.png',
    },
    {
      type: 'image/png',
      sizes: '180x180',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/25ZVR47/apple-touch-icon-180.png',
    },
  ],
}
