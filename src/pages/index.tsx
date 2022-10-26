import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/home',
    },
  }
}

const Index: () => void = () => {}

export default Index
