'use client' // this is a client component
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  IconContext,
} from 'phosphor-react'

import logo from '../../public/assets/mozdevz-white.svg'
import Link from 'next/link'
import Image from 'next/image'
import { socialMediaLinks } from '@/data/data'

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 pt-14 pb-8  flex flex-col justify-center items-center space-y-10 ">
      <Link href="/" className="text-2xl font-bold block">
        <Image src={logo} width={230} alt={''} />
      </Link>
      <div className="flex gap-4 justify-center items-center transition-all duration-700">
        <IconContext.Provider
          value={{
            color: '#fff',
            size: 32,
            weight: 'duotone',
            mirrored: false,
          }}
        >
          <Link href={socialMediaLinks.facebook} target="_blank">
            <FacebookLogo />
          </Link>

          <Link href={socialMediaLinks.twitter} target="_blank">
            <TwitterLogo />
          </Link>

          <Link href={socialMediaLinks.instagram} target="_blank">
            <InstagramLogo />
          </Link>
          <Link href={socialMediaLinks.linkdin} target="_blank">
            <LinkedinLogo />
          </Link>
          <Link href={socialMediaLinks.youtube} target="_blank">
            <YoutubeLogo />
          </Link>
        </IconContext.Provider>
      </div>
      <p className="text-slate-400 text-base leading-relaxed text-center">
        ©2023 Mozdevz Community. <br />
        All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
