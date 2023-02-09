"use client"; // this is a client component

import { ArrowRight, User, Bag, Desktop, Buildings } from "phosphor-react";
import Image from "next/image"
import Header from "@/components/Header";
import Section from "@/components/layouts/Section";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="bg-hero bg-cover bg-center p-5">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
              <h1 className="text-6xl text-white font-bold">The future of innovation is now</h1>
              <p className="text-gray-100">The core was draining on energy and destroyed the entire planet as kal-el was the only survivor.</p>

              <a className="py-2 px-5 max-w-max rounded bg-blue-500 font-bold text-white uppercase" href="#">
                Aprenda mais
              </a>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Section>
          <div className="flex flex-wrap gap-10 items-center justify-between">
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-5">
                <div className="max-w-xs bg-gray-200 rounded p-5 pt-12 overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-blue-500 hover:text-white">
                  <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-500">
                    <User size={56} className="transition-opacity duration-500 group-hover:opacity-0" />
                    <div>
                      <h3 className="text-xl text-gray-800 font-bold">É profissional de tecnologia?</h3>
                      <p className="mt-4">Com uma comunidade que ostenta uma interessante mistura de profissionais, sem duvidas o melhor sitio para fazer networking.</p>
                    </div>
                    <ArrowRight size={32} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="max-w-xs bg-gray-200 rounded p-5 pt-12 overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-blue-500 hover:text-white">
                  <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-500">
                    <Bag size={56} className="transition-opacity duration-500 group-hover:opacity-0" />
                    <div>
                      <h3 className="text-xl text-gray-800 font-bold">Pretende mudar de carreira para a tecnologia?</h3>
                      <p className="mt-4">Pretende mudar de carreira para tech? Parece assustador pois? Fazer parte da comunidade lhe possibilita mergulhar suavemente na sua carreira escolhida antes de dar o grande salto.</p>
                    </div>
                    <ArrowRight size={32} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:translate-y-10">
                <div className="max-w-xs bg-gray-200 rounded p-5 pt-12 overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-blue-500 hover:text-white">
                  <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-500">
                    <User size={56} className="transition-opacity duration-500 group-hover:opacity-0" />
                    <div>
                      <h3 className="text-xl text-gray-800 font-bold">É profissional de tecnologia?</h3>
                      <p className="mt-4">Com uma comunidade que ostenta uma interessante mistura de profissionais, sem duvidas o melhor sitio para fazer networking.</p>
                    </div>
                    <ArrowRight size={32} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="max-w-xs bg-gray-200 rounded p-5 pt-12 overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-blue-500 hover:text-white">
                  <div className="flex flex-col gap-5 group-hover:-translate-y-20 transition-transform duration-500">
                    <Bag size={56} className="transition-opacity duration-500 group-hover:opacity-0" />
                    <div>
                      <h3 className="text-xl text-gray-800 font-bold">Pretende mudar de carreira para a tecnologia?</h3>
                      <p className="mt-4">Pretende mudar de carreira para tech? Parece assustador pois? Fazer parte da comunidade lhe possibilita mergulhar suavemente na sua carreira escolhida antes de dar o grande salto.</p>
                    </div>
                    <ArrowRight size={32} className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-sm flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl font-bold">Aprendemos em comunidade</h2>
              <p className="text-gray-600">Proporcionamos oportunidades de partilha de conhecimento e desenvolvimento de habilidades para a criação de produtos digitais a jovens durante o period de formação e contribuímos para o desenvolvimento da sociedade atraves das soluções desenvolvidas.</p>
              <a className="py-2 px-5 max-w-max rounded bg-blue-500 font-medium text-white uppercase" href="#">
                Saiba mais
              </a>
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex flex-wrap items-center gap-14">
            <div className="max-w-md flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl font-bold">Our Recognition</h2>
              <p className="text-gray-600">Over 30 high quality professionally designed pre-built website concepts to choose from. Build your website using a fully visual interface, using our revolutionary page & header builder.</p>

              <a href="#" className="text-blue-500 font-bold">Contacte-nos</a>
            </div>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-10 lg:gap-0">
              <div className="border-r border-gray-500 pr-20 flex flex-col gap-2 w-full">
                <span className="text-blue-500 text-4xl font-medium block">2011</span>
                <span className="block font-bold">Established</span>
              </div>
              <div className="sm:pl-10 sm:pr-20 border-r border-gray-500 flex flex-col gap-2 w-full">
                <span className="text-blue-500 text-4xl font-medium block">180</span>
                <span className="block font-bold">Projects</span>
              </div>
              <div className="sm:pl-10 sm:pr-20 border-r border-gray-500 sm:border-none flex flex-col gap-2 w-full">
                <span className="text-blue-500 text-4xl font-medium block">46</span>
                <span className="block font-bold">Clients</span>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white">
                <Desktop size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Talentos</h3>
                <p className="mt-4">Capacitados e desenvolvemos talentos com o objective de preprarar e integrar no mercado de trabalho atraves da nossa rede de parceiros.</p>
              </div>
            </div>

            <div className="max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Startup</h3>
                <p className="mt-4">Apoiamos equipas multidisplinares com orientação e capacitação no desenvolvimento de soluções tecnológicas em ambientes de extrema incerteza.</p>
              </div>
            </div>

            <div className="max-w-xs flex flex-col items-center gap-5">
              <div className="bg-blue-500 p-5 rounded-full text-white">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800 font-bold">Corporate</h3>
                <p className="mt-4">Firmamos parceirias e trabalhamos com empresas e ONGs no desenvolvimento de soluções de base tecnológica para a resolução de problemas sociais.</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}
