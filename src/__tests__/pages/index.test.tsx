import { render } from '@testing-library/react'

import Home, { SocialProps } from '@/pages/index'
import { getAboutMe } from '@/utils/about-me'
import { readData } from '@/utils/read-data'

describe('Home', () => {
  it('renders a heading', async () => {
    const { socials } = await readData<SocialProps>('src/data/socials.json')
    const about = await getAboutMe()

    const { container } = render(<Home about={about} socials={socials} />)

    expect(container).toMatchSnapshot()
  })
})
