'use client' // this is a client component
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from 'phosphor-react'
const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-800 py-8 px-5 md:py-4 md:px-20 md:flex md:flex-row md:justify-between md:items-center'>
        <p className="text-slate-400 md:mb-0 mb-4"> Copyright © 2023 Mozdevz Community. All Rights Reserved</p>
      <div className="flex flex-row justify-center gap-4">
        <FacebookLogo size={32} color="#fff" />
        <TwitterLogo size={32} color="#fff" />
        <InstagramLogo size={32} color="#fff" />
        <LinkedinLogo size={32} color="#fff" />
        <YoutubeLogo size={32} color="#fff" />
      </div>
    </footer>
  )
}

export default Footer
