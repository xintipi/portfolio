import clsx from 'clsx'
import { FiBriefcase } from 'react-icons/fi'

import AcademicCap from '@/components/icons/AcademicCap'
import SectionTitle from '@/components/shared/SectionTitle'
import { educations } from '@/data/educations'
import { experiences } from '@/data/experiences'
import styles from '@/styles/modules/ExperienceSection.module.scss'

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>Educations & Experiences</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2">
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol
              className={clsx(
                styles['education'],
                'border-l border-gray-200 dark:border-gray-500'
              )}>
              {educations.map((education, index) => (
                <li key={index} className={styles['education-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <AcademicCap className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {education.degree}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.school}
                  </p>
                  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    {education.description.map((edu) => (
                      <li key={edu} className="list-disc text-[11px]">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Experience */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol
              className={clsx(
                styles['experience'],
                'border-l border-gray-200 dark:border-gray-500'
              )}>
              {experiences.map((experience, index) => (
                <li key={index} className={styles['experience-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <FiBriefcase className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {experience.jobTitle}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {experience.company}
                  </p>
                  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    {experience.description.map((des) => (
                      <li key={des} className="list-disc text-[11px]">
                        {des}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceSection
