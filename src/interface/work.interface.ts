export type WorkInterface = {
  id: number
  title: string
  slug: string
  category: string
  thumbnailUrl: string
  description?: string
  images: string[]
  previewUrl: string
  publishedAt: string
  featureList: string[]
  attributes: {
    name: string
    value: string | number
  }[]
}
