'use client' // this is a client component

import { NavigationArrow, DeviceMobile, EnvelopeSimple } from 'phosphor-react'
import Section from '@/components/layouts/Section'
import Hero from '@/components/layouts/Hero'
import { useContext } from 'react'
import { LangContext } from '@/contexts/langContext'

export default function Contact() {
  const {
    lang: { staticContent },
  } = useContext(LangContext)
  return (
    <div className="min-h-screen">
      <Hero className="bg-header">
        <h1 className="text-4xl md:text-5xl text-white break-words">
          {staticContent.contactTitle}
        </h1>
      </Hero>

      <main>
        <Section>
          <div className="flex flex-wrap gap-6">
            <div className="py-16 px-5 md:px-16 rounded shadow -mt-44 bg-white flex flex-col gap-6 w-full max-w-md mx-auto md:max-w-2xl md:mx-0">
              <div className="flex flex-col gap-6">
                <h2 className="text-gray-900 text-3xl">
                  {staticContent.contactSubtitle}
                </h2>
                <p className="text-gray-600">
                  {staticContent.contactInvitation}
                </p>
              </div>
              <form className="w-full flex flex-col gap-6">
                <div className="flex flex-wrap md:flex-nowrap gap-6">
                  <input
                    type="text"
                    required
                    className="w-full outline-none relative p-3 border border-gray-100 rounded md:max-w-xs focus-within:border-blue-500 valid:border-blue-500"
                    placeholder={staticContent.placeholderName}
                  />
                  <input
                    type="text"
                    required
                    className="w-full outline-none relative p-3 border border-gray-100 rounded md:max-w-xs focus-within:border-blue-500 valid:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <input
                  type="text"
                  required
                  className="w-full outline-none relative p-3 border border-gray-100 rounded focus-within:border-blue-500 valid:border-blue-500"
                  placeholder={staticContent.placeholderTopic}
                />
                <textarea
                  placeholder={staticContent.placeholderMessage}
                  required
                  className="outline-none w-full border border-gray-100 rounded min-h-[100px] resize-x-none p-3 focus-within:border-blue-500 valid:border-blue-500"
                ></textarea>
                <button type="submit" className="button !w-full !max-w-none">
                  {staticContent.submit}
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-10 max-w-md w-full mx-auto">
              <div className="max-w-sm flex items-start gap-5">
                <div className="bg-primary p-4 rounded-full text-white brightnessDownWhenHover">
                  <NavigationArrow size={38} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg text-gray-800">
                    {staticContent.visitUs}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    CoWork Lab 7, Avenida Marginal, nº 9149A Maputo, 1102
                  </p>
                </div>
              </div>
              <div className="max-w-sm flex items-start gap-5">
                <div className="bg-primary p-4 rounded-full text-white brightnessDownWhenHover">
                  <DeviceMobile size={38} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg text-gray-800">
                    {staticContent.callUs}
                  </h3>
                  <p className="text-gray-600 text-lg">+258 84 856 5131</p>
                </div>
              </div>
              <div className="max-w-sm flex items-start gap-5">
                <div className="bg-primary p-4 rounded-full text-white brightnessDownWhenHover">
                  <EnvelopeSimple size={38} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg text-gray-800">
                    {staticContent.writeToUs}
                  </h3>
                  <p className="text-gray-600 text-lg">contacto@mozdevz.org</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
