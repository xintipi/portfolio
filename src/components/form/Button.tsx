import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from '@/styles/modules/Button.module.scss'

interface Props {
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
}

const Button: FC<Props> = ({ type = 'submit', children, className }) => {
  return (
    <button type={type} className={clsx([styles.btn, className])}>
      {children}
    </button>
  )
}

export default Button
