import { FC, ReactNode } from 'react'

import DotBg from '@/components/partials/DotBg'

const SectionTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <DotBg className="absolute bottom-5 h-8 w-8 fill-current" />
      <p className="pl-3 text-4xl font-bold">{children}</p>
    </div>
  )
}

export default SectionTitle
