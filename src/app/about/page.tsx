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

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-header bg-cover bg-center p-5 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
            <h1 className="text-4xl md:text-5xl text-white font-bold break-words">
              Impactamos milhares de devz e impulsionamos carreiras
            </h1>
          </div>
        </div>
      </div>

      <main>
        <Section>
          <div className="md:px-4 px-6">
            <div className="md:flex md:space-x-10 md:gap-28">
              <div className="mb-8 md:w-2/5">
                <h2 className="text-[24px] md:text-4xl mb-4 md:mb-8">
                  Quem nós somos
                </h2>
                <a className="text-blue-500 font-bold" href='#'>
                  Conheça a nossa team
                </a>
              </div>
              <div className="md:w-3/5 mb-12">
                <p className="mb-4 leading-loose font-light">
                  Somos uma comunidade de desenvolvedores moçambicanos de software e aplicações, que usa os seus talentos para contribuir para o desenvolvimento social da comunidade na qual estamos inseridos.
                </p>
                <p className="leading-loose font-light">
                  Acreditamos no poder das tecnologias de informação e comunicação (TIC) para mudar vidas. Vemos as TICs como infra-estrutura essencial para auxiliar a prestação de serviços e para a redução de problemas sociais.
                </p>
              </div>
            </div>
            <div className="bg-about bg-cover bg-center p-5 w-full h h-96 min-h-full"></div>
          </div>
        </Section>
        <Wrapper className='py-16 md:py-32 px-10 md:px-32 bg-[#fafbfd]'>
          <div className='mb-10 text-center'>
            <p className="mb-4">How we work</p>
            <h2 className='text-2xl md:text-4xl md:font-semibold'>A simple process</h2>
          </div>
          <div className='flex flex-col gap-10 text-center px-6 md:flex-row md:gap-10'>
            <div>
              <h3 className='font-bold mb-4'>Visão</h3>
              <p className="font-light">
                Ser uma plataforma activa e colaborativa que promova a integração local, continental e global das comunidades através do uso das tecnologias.
              </p>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Missão</h3>
              <p className="font-light">
                Usar as TICs para desenvolver o país, através do empoderamento, espírito de trabalho e partilha de conhecimento para tornar Moçambique numa referência regional de produção de soluções tecnológicas.
              </p>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Valores</h3>
              <p className="font-light">
                Prezamos a colaboração, inovação e criação de soluções locais para problemas locais.
              </p>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}