import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

import { AboutMeInterface } from '@/interface/aboutMe.interface'

export const aboutMe = async () => {
  const result: AboutMeInterface[] = []
  const dir = path.join(process.cwd(), './about-me')
  const aboutMe = await fs.readdir(dir)

  await Promise.all(
    aboutMe.map(async (value) => {
      const aboutPath = path.join(dir, 'index.mdx')
      const slug = dir.replace('.mdx', '')
      const fileContent = await fs.readFile(aboutPath, 'utf8')

      const {
        content,
        data: { description },
      } = matter(fileContent)

      result.push({
        description,
        slug,
        readingTime: readingTime(content).text,
      })
    })
  )

  return result
}

export const getAboutMe = async (): Promise<AboutMeInterface[]> => {
  return await aboutMe()
}
