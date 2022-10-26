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
      sizes: '180x180',
      rel: 'applue-touch-icon',
      href: 'https://i.ibb.co/25ZVR47/apple-touch-icon-180.png',
    },
  ],
}
