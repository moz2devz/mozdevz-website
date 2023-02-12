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
      <div className="bg-hero bg-cover bg-center p-5 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
            <h1 className="text-4xl md:text-5xl text-white font-bold break-words">
              We make Mondays to Fridays exciting
            </h1>
          </div>
        </div>
      </div>

      <main>
        <h1> This is the about page </h1>
      </main>
      <Footer />
    </>
  )
}
