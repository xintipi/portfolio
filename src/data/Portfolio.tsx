import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiLink as LinkIcon } from 'react-icons/fi'
import { UrlObject } from 'url'

import styles from '@/styles/modules/Portfolio.module.scss'

type Props = {
  imageUrl: string
  category: string
  title: string
  href: string | UrlObject
}

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  return (
    <div className={clsx(styles['portfolio'], 'bg-white dark:bg-gray-700')}>
      <Image src={imageUrl} height={384} width={512} alt={title} />
      <div className={styles['portfolio-overlay']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <Link href={href} legacyBehavior>
          <a className={styles['portfolio-title']}>{title}</a>
        </Link>
        <Link href={href} legacyBehavior>
          <a className={styles['portfolio-link']}>
            <LinkIcon className="h-5 text-white" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
