'use client' // this is a client component

import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import Hero from '@/components/layouts/Hero'
import { useContext } from 'react'
import { LangContext } from '@/contexts/langContext'

export default function About() {
  const {
    lang: { staticContent },
  } = useContext(LangContext)
  return (
    <div className="min-h-screen">
      <Hero className="bg-header">
        <h1 className="text-4xl md:text-5xl text-white break-words">
          {staticContent.heroInvitation}
        </h1>
      </Hero>

      <main>
        <Section>
          <div className="md:px-4 px-6">
            <div className="md:flex md:space-x-10 md:gap-28">
              <div className="mb-8 md:w-2/5">
                <h2 className="text-[24px] md:text-4xl mb-4 md:mb-8">
                  {staticContent.aboutTitle}
                </h2>
                <a className="text-primary font-bold" href="#">
                  {staticContent.aboutSubtitle}
                </a>
              </div>
              <div className="md:w-3/5 mb-12">
                <p className="mb-4 leading-loose font-light">
                  {staticContent.aboutDescription}
                </p>
                <p className="leading-loose font-light">
                  {staticContent.aboutDescription2}
                </p>
              </div>
            </div>
            <div className="bg-about bg-cover bg-center p-5 w-full h h-96 min-h-full"></div>
          </div>
        </Section>
        <Wrapper className="py-16 md:py-32 px-10 md:px-32 bg-[#fafbfd]">
          <div className="mb-10">
            <p className="mb-4">{staticContent.identityTitle}</p>
            <h2 className="text-2xl text-primary md:text-4xl md:font-bold">
              {staticContent.identitySubtitle}
            </h2>
          </div>
          <div className="md:grid md:gap-16 md:grid-cols-3">
            <div className="mb-4">
              <h3 className="mb-2">{staticContent.missionTitle}</h3>
              <p className="font-light">{staticContent.missionSubtitle}</p>
            </div>
            <div className="mb-4">
              <h3 className="mb-2">{staticContent.visionTitle}</h3>
              <p className="font-light">{staticContent.visionSubtitle}</p>
            </div>
            <div className="mb-4">
              <h3 className="mb-2">{staticContent.valuesTitle}</h3>
              <p className="font-light">{staticContent.visionSubtitle}</p>
            </div>
          </div>
        </Wrapper>

        <Section>
          <div className="flex flex-wrap justify-center xl:justify-between items-center gap-6">
            <div className="max-w-2xl text-justify">
              <h2 className="text-2xl md:text-4xl md:font-semibold mb-2 md:mb-8">
                {staticContent.manifestoTitle}
              </h2>
              <p className="leading-7 md:leading-loose">
                {staticContent.manifesto1}
              </p>
              <p className="leading-7 md:leading-loose">
                {staticContent.manifesto2}
              </p>
              <p className="leading-7 md:leading-loose">
                {staticContent.manifesto3}
              </p>
              <p className="leading-7 md:leading-loose">
                {staticContent.manifesto4}
              </p>
              <p className="leading-7 md:leading-loose">
                {staticContent.manifesto5}{' '}
              </p>
              <p className="text-primary font-bold"> {staticContent.joinUs}</p>
            </div>

            <div className="h-[600px] max-w-md w-full bg-hero bg-cover bg-center"></div>
          </div>
        </Section>
      </main>
    </div>
  )
}
