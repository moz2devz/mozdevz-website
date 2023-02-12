'use client' // this is a client component

import Image from 'next/image'
import { Desktop, Buildings } from 'phosphor-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import TeamMember from '@/components/cards/TeamMember'
import { recognitions, team, sponsors, cases as whyMozDevz } from '@/data'
import Cases from '@/components/cards/Cases'
import { RevealList } from 'next-reveal'

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-hero bg-cover bg-center p-5 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
            <h1 className="text-4xl md:text-5xl text-white font-bold break-words">
              A maior comunidade de desenvolvedores de Moçambique
            </h1>
            <p className="text-gray-100">
              Impactamos milhares de devz e impulsionamos carreiras
            </p>

            <a
              className="button"
              href="#"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      <main>
        <Section>
          <div className="flex flex-wrap gap-10 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-5">
              {
                whyMozDevz.map((items, index) => {
                  return (
                    <div key={index} className={`flex flex-col gap-5 ${index == 1 ? "md:-translate-y-6" : ""}`}>
                      {
                        items.map((item, index) => {
                          return (
                            <Cases key={index} {...item} />
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>

            <div className="max-w-sm flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl font-bold">
                Aprendemos em comunidade
              </h2>
              <p className="text-gray-600">
                Proporcionamos oportunidades de partilha de conhecimento e
                desenvolvimento de habilidades para a criação de produtos
                digitais a jovens durante o period de formação e contribuímos
                para o desenvolvimento da sociedade atraves das soluções
                desenvolvidas.
              </p>
              <a
                className="button"
                href="#"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </Section>

        <Section>
          <RevealList reset={true} interval={120} delay={500} className="flex flex-wrap items-center gap-14">
            <div className="max-w-md flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl font-bold">
                Impactamos milhares de devz e impulsionamos carreiras
              </h2>
              <p className="text-gray-600">
                Somos uma comunidade de desenvolvedores moçambicanos de software e aplicações. Usamos os nossos talentos para contribuir para o desenvolvimento social da comunidade na qual estamos inseridos.
              </p>

              <a href="#" className="text-blue-500 font-bold">
                Saiba mais
              </a>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-10">
              {
                recognitions.map((recognition, index) => {
                  return (
                    <div key={index} className="recognition flex flex-col gap-2 w-full">
                      <span className="text-blue-500 text-4xl font-medium block">
                        {recognition.number}
                      </span>
                      <span className="block font-bold">{recognition.text}</span>
                    </div>
                  )
                })
              }
            </div>
          </RevealList>
        </Section>

        {/* Join the community */}
        <Wrapper className='px-5 py-20 md:py-40 md:flex md:flex-col md:items-center'>
          <aside className="mb-6 md:mb-8 md:w-2/5">
            <h2 className="text-[22px] md:text-2xl text-center">
              Gostaria de participar dos nossos meetups e ser
              membro da comunidade?
            </h2>
          </aside>
          <RevealList reset={true} interval={60} delay={500} className="flex flex-col items-center md:flex-row md:gap-x-4 gap-y-4 text-center text-white px-5">
            <a className="button !rounded-none" href="#">
              Ser membro da Mozdevz
            </a>
            <a className="button !rounded-none" href="#">
              Participar de um meetup
            </a>
          </RevealList>
        </Wrapper>

        <Section>
          <RevealList reset={true} interval={120} delay={500} className="flex flex-wrap items-center justify-center  gap-10">
            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white brightnessDownWhenHover">
                <Desktop size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Talentos</h3>
                <p className="mt-4">
                  Capacitados e desenvolvemos talentos com o objective de
                  preprarar e integrar no mercado de trabalho atraves da nossa rede de parceiros.
                </p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white brightnessDownWhenHover">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Startup</h3>
                <p className="mt-4">
                  Apoiamos equipas multidisplinares com orientação e capacitação
                  no desenvolvimento de soluções tecnológicas em ambientes de
                  extrema incerteza.
                </p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white brightnessDownWhenHover">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Corporate</h3>
                <p className="mt-4">
                  Firmamos parceirias e trabalhamos com empresas e ONGs no
                  desenvolvimento de soluções de base tecnológica para a
                  resolução de problemas sociais.
                </p>
              </div>
            </div>
          </RevealList>
        </Section>

        <Section>
          <div className='text-center max-w-md mx-auto'>
            <h2 className="text-gray-900 text-3xl font-bold">Mozdevz Team</h2>
            <p className="text-gray-600">
              A team responsavel por dirigir essa imensa comunidade de
              devz do Rovuma ao Maputo
            </p>
          </div>

          <RevealList reset={true} interval={60} delay={500} className="mt-10 w-full flex flex-wrap gap-16 justify-center">
            {
              team.map((member, index) => {
                return (
                  <div key={index}><TeamMember {...member} /></div>
                )
              })
            }
          </RevealList>
        </Section>

        <Section>
          <div className='text-center max-w-md mx-auto'>
            <h2 className="text-gray-900 text-3xl font-bold mb-2">
              Parceiros e patrocinadores
            </h2>
            <p className="text-gray-600">
              Parceiros e patrocinadores que nos apoiam na organização de eventos, workshops e projectos que ajudam a impulsionar o desenvolvimento da comunidade
            </p>
          </div>

          <RevealList reset={true} interval={75} delay={500} className="mt-10 w-full flex flex-wrap gap-16 justify-center">
            {
              sponsors.map((sponsor, index) => {
                return (
                  <div key={index} className="max-w-[100px]">
                    <Image src={sponsor.logo} alt={sponsor.name} className="w-full" />
                  </div>
                )
              })
            }
          </RevealList>
        </Section>
      </main>
      <Footer />
    </>
  )
}
