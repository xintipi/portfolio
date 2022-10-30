import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import absoluteUrl from 'next-absolute-url'
import { ArticleJsonLd } from 'next-seo'
import React, { FC } from 'react'
import Slider, { Settings } from 'react-slick'

import { works } from '@/data/works'
import { WorkInterface } from '@/interface/work.interface'
import Layout from '@/layouts/Layout'

const settings: Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
}

type Props = {
  work: WorkInterface & {
    description: string
    images: string[]
    publishedAt: string
    previewUrl: string
  }
  host: string
}

const WorkDetail: FC<Props> = ({ work, host }) => {
  return (
    <>
      <ArticleJsonLd
        key={`blogJSON-${work.id}`}
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/works/${work.slug}`}
        title={work.title}
        images={[`${process.env.NEXT_PUBLIC_DOMAIN}/${work.thumbnailUrl}`]}
        datePublished={work.publishedAt}
        description={work.description}
        isAccessibleForFree={true}
        authorName={''}
      />

      <Layout
        title={work.title}
        canonical={`${process.env.NEXT_PUBLIC_DOMAIN}/works/${work.slug}`}
        description={work.description}
        openGraph={{
          description: work.description,
          title: `${work.title} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
          url: `${host}/works/${work.slug}`,
          type: 'article',
          article: {
            publishedTime: work.publishedAt,
            tags: ['NextJS', 'ReactJS'],
          },
          images: [
            {
              url: `${host}${work.thumbnailUrl}`,
              width: 1280,
              height: 720,
            },
          ],
        }}>
        <div className="container">
          <div className="mt-24 flex flex-col items-center justify-center">
            <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
              {work.title}
            </h1>
            <p className="mt-4 flex items-center text-gray-400">
              <span>{work.publishedAt}</span>
              <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
              <span>{work.category}</span>
            </p>
          </div>
          <div className="mt-10">
            <Slider {...settings}>
              {work.images.map((image, index) => (
                <div className="overflow-hidden rounded-xl" key={index}>
                  <Image src={image} height={720} width={1280} alt={work.title} priority />
                </div>
              ))}
            </Slider>
            <div className="mt-6 flex justify-center">
              <Link href={work.previewUrl} legacyBehavior>
                <a className="btn">Live Preview</a>
              </Link>
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-xl font-semibold">Summary</h3>
            <p className="mt-4">{work.description}</p>
            <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
            <ul className="mt-4 list-disc pl-4">
              {work.featureList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
            <table className="w-full">
              <tbody>
                {work.attributes.map((attribute, index) => (
                  <tr key={index}>
                    <td className="w-48 px-4 py-2 font-semibold">{attribute.name}</td>
                    <td>{attribute.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-10 flex h-48 flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold">Want to Build a project like this?</h2>
            <p className="mt-4">I can design and develop beautiful websites, apps for you</p>
            <Link href="/contact" legacyBehavior>
              <a className="mt-5 rounded-full bg-primary-500 px-8 py-2 font-semibold tracking-wide text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
                Start a project
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = absoluteUrl(context.req)
  const slug = context.params?.slug as string
  const work = works.find((work) => work.slug === slug)
  if (work) {
    return {
      props: {
        work,
        host: origin,
      },
    }
  }
  return {
    notFound: true,
  }
}
export default WorkDetail
