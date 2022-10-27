import Link from 'next/link'
import { FC } from 'react'
import { HiOutlineChartBar, HiOutlineFire } from 'react-icons/hi'

import Button from '@/components/form/Button'
import ProgressBar from '@/components/shared/ProgressBar'
import SectionTitle from '@/components/shared/SectionTitle'

const AboutSection: FC<{ description: string }> = ({ description }) => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div>
          <p className="whitespace-pre-line text-justify">
            Hi, my name is Trung. I’m a front end developer with four years of experience and i'm
            living in Ho Chi Minh city, Vietnam. I'm interesting websites that amazed my users as
            well as delivering them in high quality.
          </p>
          <Button className="mt-5">
            <Link href="/cv/Nguyen_Huu_Trung_Cover_Letter.pdf" target="_blank">
              Downlad CV
            </Link>
          </Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">HTML5 / CSS3</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="yellow" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">VueJS</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="green" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">NuxtJS</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="emerald" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">ReactJS</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="blue" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">NextJS</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="sky" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">TypeScript</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="fuchsia" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Gulp / Webpack / Vite</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="purple" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Git / Gitflow</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="primary" progress={60} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
