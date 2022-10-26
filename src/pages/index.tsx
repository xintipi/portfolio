import type { GetStaticProps, NextPage } from 'next'
import { ElementType } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/home',
    },
  }
}

const Index: NextPage<{ Component: ElementType }> = ({ Component }) => {
  return <Component />
}

export default Index
