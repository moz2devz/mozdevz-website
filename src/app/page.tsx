'use client' // this is a client component

import Image from 'next/image'
import { UsersThree, Buildings, RocketLaunch } from 'phosphor-react'
import Section from '@/components/layouts/Section'
import TeamMember from '@/components/cards/TeamMember'
import Hero from '@/components/layouts/Hero'

import { recognitions, team, sponsors, cases as whyMozDevz, schools } from '@/data'
import Cases from '@/components/cards/Cases'
import { RevealList } from 'next-reveal'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero className="bg-hero">
        <h1 className="text-4xl md:text-5xl text-white break-words">
          A maior comunidade de desenvolvedores de Moçambique
        </h1>
        <p className="text-gray-100">
          Impactamos milhares de devz e impulsionamos carreiras
        </p>

        <a
          className="button block lg:hidden"
          href="#"
        >
          Junta-se a comunidade
        </a>
      </Hero>

      <main>
        <Section>
          <div className="flex flex-wrap gap-10 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-8">
              {
                whyMozDevz.map((items, index) => {
                  return (
                    <div key={index} className={`flex flex-col gap-8 ${index == 1 ? "md:-translate-y-6" : ""}`}>
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
              <h2 className="text-gray-900 text-3xl">
                Aprendemos em comunidade
              </h2>
              <p className="text-gray-600">
                Proporcionamos oportunidades de partilha de conhecimento e
                desenvolvimento de habilidades para a criação de produtos
                digitais a jovens durante o período de formação e contribuímos
                para o desenvolvimento da sociedade atraves das soluções
                desenvolvidas.
              </p>
              <a
                className="text-primary font-bold border-solid border border-red-500 py-2 px-4 inline-block max-w-max"
                href="/about"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </Section>

        <Section className='bg-[#fafbfd]'>
          <RevealList interval={120} delay={500} className="flex flex-wrap items-center gap-14">
            <div className="max-w-md flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl">
                Impactamos milhares de devz e impulsionamos carreiras
              </h2>
              <p className="text-gray-600">
                Somos uma comunidade de desenvolvedores moçambicanos de software e aplicações. Usamos os nossos talentos para contribuir para o desenvolvimento social da comunidade na qual estamos inseridos.
              </p>

              <Link href='/about' className="text-primary font-bold">
                Saiba mais
              </Link>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-10">
              {
                recognitions.map((recognition, index) => {
                  return (
                    <div key={index} className="recognition flex flex-col gap-2 w-full">
                      <span className="text-primary text-4xl font-medium block">
                        +{recognition.number}
                      </span>
                      <span className="block font-bold">{recognition.text}</span>
                    </div>
                  )
                })
              }
            </div>
          </RevealList>
        </Section>

        <Section>
          <RevealList interval={120} delay={500} className="flex flex-wrap items-center justify-center  gap-10">
            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="p-5 rounded-full text-primary brightnessDownWhenHover">
                <UsersThree size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">Talentos</h3>
                <p className="mt-4">
                  Capacitamos e desenvolvemos talentos com o objectivo de
                  preprarar e integrar no mercado de trabalho através da nossa rede de parceiros.
                </p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="p-5 rounded-full text-primary brightnessDownWhenHover">
                <RocketLaunch size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">Startup</h3>
                <p className="mt-4">
                  Apoiamos equipas multidisplinares com orientação e capacitação
                  no desenvolvimento de soluções tecnológicas em ambientes de
                  extrema incerteza.
                </p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="p-5 rounded-full text-primary brightnessDownWhenHover">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">Corporate</h3>
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
            <h2 className="text-gray-900 text-3xl">MozDevz Team</h2>
            <p className="text-gray-600">
              A team responsável por dirigir essa imensa comunidade de
              devz do Rovuma ao Maputo
            </p>
          </div>

          <RevealList interval={60} delay={500} className="mt-10 w-full flex flex-wrap gap-16 justify-center">
            {
              team.map((member, index) => {
                return (
                  <div key={index}><TeamMember {...member} /></div>
                )
              })
            }
          </RevealList>
        </Section>

        <Section className="bg-[#fafbfd]">
          <div className='text-center max-w-md mx-auto'>
            <h2 className="text-gray-900 text-3xl mb-2">
              Parceiros e patrocinadores
            </h2>
            <p className="text-gray-600">
              Parceiros e patrocinadores que nos apoiam na organização de eventos, workshops e projectos que ajudam a impulsionar o desenvolvimento da comunidade
            </p>
          </div>

          <RevealList interval={75} delay={500} className="mt-10 md:px-32 w-full flex flex-wrap gap-16 justify-center">
            {
              sponsors.map((sponsor, index) => {
                return (
                  <div key={index} className="max-w-[100px] flex justify-center items-center">
                    <Image src={sponsor.logo} alt={sponsor.name} className="w-full" />
                  </div>
                )
              })
            }
          </RevealList>
        </Section>

        <Section className="bg-[#fafbfd]">
          <div className='text-center max-w-md mx-auto'>
            <h2 className="text-gray-900 text-3xl mb-2">
            MozDevz Schools
            </h2>
            <p className="text-gray-600">
            Universidades comprometidas com o sucesso e excelência dos alunos em ciências tecnológicas através da educação, inovação  que ajudam a encorajar o desenvolvimento da comunidade MozDevz            </p>
          </div>

          <RevealList interval={75} delay={500} className="mt-10 md:px-32 w-full flex flex-wrap gap-16 justify-center">
            {
              schools.map((school, index) => {
                return (
                  <div key={index} className="max-w-[100px]">
                    <Image src={school.logo} alt={school.name} className="w-full" />
                  </div>
                )
              })
            }
          </RevealList>
        </Section>
      </main >
    </div>
  )
}
