import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { HiOutlineChartBar, HiOutlineFire } from 'react-icons/hi'

import ProgressBar from '@/components/shared/ProgressBar'
import SectionTitle from '@/components/shared/SectionTitle'
import styles from '@/styles/modules/Button.module.scss'

const AboutSection: FC<{ about: string }> = ({ about }) => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div>
          <p className="whitespace-pre-line text-justify">{about}</p>
          <Link
            href="/file/CV_Nguyen_Huu_Trung_Frontend_Developer.pdf"
            className={clsx(styles.btn, 'mt-5')}
            target="_blank">
            Download CV
          </Link>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">HTML5 / CSS3</p>
              <p>60%</p>
            </div>
            <ProgressBar color="yellow" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">VueJS</p>
              <p>60%</p>
            </div>
            <ProgressBar color="green" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">NuxtJS</p>
              <p>60%</p>
            </div>
            <ProgressBar color="emerald" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">ReactJS</p>
              <p>60%</p>
            </div>
            <ProgressBar color="blue" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">NextJS</p>
              <p>60%</p>
            </div>
            <ProgressBar color="sky" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">TypeScript</p>
              <p>60%</p>
            </div>
            <ProgressBar color="fuchsia" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">Gulp / Webpack / Vite</p>
              <p>60%</p>
            </div>
            <ProgressBar color="purple" progress={60} />
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <p className="font-semibold">Git / Gitflow</p>
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
