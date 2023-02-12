'use client' // this is a client component

import { useEffect, useState } from 'react'
import { List, X } from 'phosphor-react'
import Image from 'next/image'
import logo from "../../public/assets/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    document.querySelector('body')?.classList.remove('overflow-y-hidden')
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])

  return (
    <header
      className={`transition-colors duration-700 fixed z-50 right-0 left-0 top-0 ${scrollY > 200 ? 'text-black bg-white shadow' : 'bg-black/20 text-white'
        }`}
    >
      <div
        className={`w-full bg-black/60  right-0 top-0 h-screen ${isMenuOpen ? 'absolute z-20 w-screen' : 'hidden w-0'
          }`}
      ></div>

      <div className="max-w-7xl mx-auto p-5">
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold block">
              <Image
                src={logo}
                width={130}
                alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
              />
            </span>
          </div>

          <nav>
            <ul className="flex items-center gap-5 font-thin text-sm">
              <li>
                <a
                  href="/"
                  className="hover:opacity-70 transition-opacity font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:opacity-70 transition-opacity font-medium"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:opacity-70 transition-opacity font-medium"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:opacity-70 transition-opacity font-medium"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <a
            className="button text-sm"
            href="#"
          >
            Juntar-se a comunidade
          </a>
        </div>

        <div className="flex justify-between lg:hidden">
          <span className="text-2xl font-bold block">
            <a href="/">MozDevz</a>
          </span>

          <List
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true)
              document.querySelector('body')?.classList.add('overflow-y-hidden')
            }}
          />

          <div
            className={`absolute z-30 flex text-base right-0 top-0 transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="bg-white h-screen w-full max-w-xs min-w-[300px] p-8 text-black">
              <div className="flex gap-3 justify-between items-center">
                <span className="text-2xl font-bold block">
                  <a href="/">MozDevz</a>
                </span>

                <X
                  size={24}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document
                      .querySelector('body')
                      ?.classList.remove('overflow-y-hidden')
                  }}
                />
              </div>

              <nav className="block my-20">
                <ul className="flex flex-col gap-5 font-thin">
                  <li>
                    <a href="/" className="text-blue-500 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>

              <a
                className="py-2 px-5 rounded bg-blue-500 font-bold text-white"
                href="#"
              >
                Juntar-se a equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
