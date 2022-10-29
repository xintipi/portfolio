import clsx from 'clsx'
import Link from 'next/link'

import Portfolio from '@/components/shared/Portfolio'
import SectionTitle from '@/components/shared/SectionTitle'
import { works } from '@/data/works'
import styles from '@/styles/modules/Button.module.scss'

const RecentWorkSection = () => {
  return (
    <>
      <SectionTitle>Recent Works</SectionTitle>
      <div className="mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {works
          .filter((_, index) => index < 6)
          .map((work) => (
            <Portfolio
              key={work.id}
              imageUrl={work.thumbnailUrl}
              category={work.category}
              title={work.title}
              href={`/works/${work.slug}`}
            />
          ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href={'/works'} legacyBehavior>
          <a className={clsx(styles.btn)}>View All</a>
        </Link>
      </div>
    </>
  )
}

export default RecentWorkSection
