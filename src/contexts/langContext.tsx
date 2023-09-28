"use client"
import { createContext, useState } from 'react'
import * as pt from '@/data/pt'
import * as en from '@/data/en'
const LangContext = createContext({} as {
    lang: typeof pt | typeof en
    handleChange: () => void
})
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(pt)
  const handleChange = () => {
    setLang((lang) => {
      return lang == pt ? en : pt
    })
  }
  return <LangContext.Provider value={{ lang, handleChange }}>{children}</LangContext.Provider>
}
export {ContextProvider as LangContextProvider, LangContext} 