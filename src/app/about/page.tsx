'use client' // this is a client component

import Image from "next/image"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import Hero from '@/components/layouts/Hero'

import img from "../../../public/assets/hero.jpg";


export default function About() {
  return (
    <>
      <Header />
      <Hero className="bg-header">
        <h1 className="text-4xl md:text-5xl text-white break-words">
          Impactamos milhares de devz e impulsionamos carreiras
        </h1>
      </Hero>

      <main>
        <Section>
          <div className="md:px-4 px-6">
            <div className="md:flex md:space-x-10 md:gap-28">
              <div className="mb-8 md:w-2/5">
                <h2 className="text-[24px] md:text-4xl mb-4 md:mb-8">
                  Quem nós somos
                </h2>
                <a className="text-primary font-bold" href='#'>
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
          <div className='mb-10'>
            <p className="mb-4">Nossa Identidade</p>
            <h2 className='text-2xl text-primary md:text-4xl md:font-semibold'>
              Comunidade. Tecnologia. Experiências
            </h2>
          </div>
          <div className='md:grid md:gap-16 md:grid-cols-3'>
            <div className="mb-4">
              <h3 className='mb-2'>Missão</h3>
              <p className="font-light">
                Usar as TICs para desenvolver o país, através do empoderamento, espírito de trabalho e partilha de conhecimento para tornar Moçambique numa referência regional de produção de soluções tecnológicas.
              </p>
            </div>
            <div className="mb-4">
              <h3 className='mb-2'>Visão</h3>
              <p className="font-light">
                Ser uma plataforma activa e colaborativa que promova a integração local, continental e global das comunidades através do uso das tecnologias.
              </p>
            </div>
            <div className="mb-4">
              <h3 className='mb-2'>Valores</h3>
              <p className="font-light">
                Prezamos a colaboração, inovação e criação de soluções locais para problemas locais.
              </p>
            </div>
          </div>
        </Wrapper>

        <Section>
          <div className="flex flex-wrap justify-center xl:justify-between items-center gap-6">
            <div className="max-w-2xl text-justify">
              <h2 className='text-2xl md:text-4xl md:font-semibold mb-2 md:mb-8'>
                Nosso manifesto
              </h2>
              <p className="leading-7 md:leading-loose">
                Acreditamos no poder das tecnologias de informação e comunicação (TIC) para mudar vidas. Vemos as TICs como infra-estrutura essencial para auxiliar a prestação de serviços e para a redução de problemas sociais.
              </p>
              <p className="leading-7 md:leading-loose">
                Embora o nosso objetivo final seja melhorar a vida das pessoas que vivem em comunidades, acreditamos que a melhor maneira de fazer isso é através do trabalho conjunto com as organizações - ONGs, organizações multilaterais, instituições governamentais ou do sector privado - que oferecem educação vital, relevo, serviços financeiros e outras.
              </p>
              <p className="leading-7 md:leading-loose">
                Cada uma destas organizações tem objetivos e necessidades distintas; Da mesma forma, quando se trata de tecnologias apropriadas, rejeitamos uma abordagem one-size-fits all.
              </p>
              <p className="leading-7 md:leading-loose">
                Acreditamos que mesmo a tecnologia mais adequada e sustentável requer um ecossistema de habilidades humanas para durar. A MozDevz trabalha com profissionais no país para construir a sua capacidade para desenvolver e gerenciar projetos de TICs, alimentando assim o ecossistema e a economia local de TIC para garantir a sustentabilidade de projectos atuais e futuros.
              </p>
              <p className="leading-7 md:leading-loose">
                MozDevz é uma organização sem fins lucrativos com uma clara missão social - para ampliar e maximizar o impacto das TICs sobre a vida daqueles que mais precisam deles. Vemos os beneficiários de nosso trabalho como parceiros em um esforço conjunto para melhorar a qualidade de vida.
              </p>
              <p className="text-primary font-bold"> Junta-te a nós! </p>
            </div>

            <div className="h-[600px] max-w-md w-full bg-hero bg-cover bg-center">
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}