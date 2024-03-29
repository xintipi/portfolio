import Image from 'next/image'
import { CorporateContactJsonLd } from 'next-seo'
import React, { ChangeEvent } from 'react'

import Button from '@/components/form/Button'
import Input from '@/components/form/Input'
import TextArea from '@/components/form/Textarea'
import PageTitle from '@/components/shared/PageTitle'
import Layout from '@/layouts/Layout'

const Contact = () => {
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
  }

  return (
    <>
      <CorporateContactJsonLd
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/contact`}
        contactPoint={[
          {
            telephone: '+84986-607-599',
            contactType: 'customer service',
            areaServed: 'VN',
            availableLanguage: ['English'],
          },
        ]}
      />
      <Layout title="Contact" description="Contact - Contact with me">
        <PageTitle
          breadcrumb={[
            { label: 'Home', path: '/' },
            { label: 'Contact', path: '' },
          ]}>
          Contact
        </PageTitle>
        <div className="container py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative mb-10 h-48">
              <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
              <h6 className="text-2xl font-bold">Contact with me</h6>
              <p className="mt-2">I would love to hear from you. 👋</p>
              <div className="mt-10 text-gray-400">
                <p>Ho Chi Minh, VietNam</p>

                <p className="mt-4">+84 986607599</p>
                <p>huutrung.mmt@gmail.com</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid gap-8 md:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input placeholder="Email Address" />
              </div>

              <div className="mt-8">
                <Input placeholder="Subject" />
              </div>
              <div className="mt-8">
                <TextArea placeholder="Message" />
              </div>
              <div className="mt-8">
                <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
