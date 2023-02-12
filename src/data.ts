// Team members images
import igorImg from "../public/assets/team/igor.jpg";

// Sponsors logo
import ccaLogo from "../public/assets/sponsors/cca.png";
import ciuemLogo from "../public/assets/sponsors/ciuem.png";
import coworklabLogo from "../public/assets/sponsors/coworklab.png";
import mctestpLogo from "../public/assets/sponsors/mctestp.png";
import oxfamLogo from "../public/assets/sponsors/oxfam.png";
import psiLogo from "../public/assets/sponsors/psi.png";
import reinoLogo from "../public/assets/sponsors/reino.png";

// Cases Icons
import { User, Student, Swap, Code } from "phosphor-react"

const recognitions = [
  { number: 5000, text: "Sensibilizados" },
  { number: 800, text: "Membros" },
  { number: 300, text: "Formados" },
]

const team = [
  {
    name: "Igor L. Sambo",
    role: "Presidente",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
  {
    name: "Sabera Pedro",
    role: "Vice-Presidente",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
  {
    name: "Carrima Januario",
    role: "Gestora de projectos",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
  {
    name: "Odilia Nhacundela",
    role: "Relações Públicas",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
  {
    name: "Odilia Nhacundela",
    role: "Relações Públicas",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
  {
    name: "Odilia Nhacundela",
    role: "Relações Públicas",
    instagram: "#",
    twitter: "#",
    facebook: "#",
    img: igorImg
  },
]

const sponsors = [
  {
    name: "Centro cultural americano",
    logo: ccaLogo
  },
  {
    name: "Ciuem",
    logo: ciuemLogo
  },
  {
    name: "Co-work lab",
    logo: coworklabLogo
  },
  {
    name: "Ministério da Ciência, Tecnologia e Ensino Superior",
    logo: mctestpLogo
  },
  {
    name: "OX Fam",
    logo: oxfamLogo
  },
  {
    name: "psi",
    logo: psiLogo
  },
  {
    name: "Reino dos Países baixos",
    logo: reinoLogo
  },
]

const cases = [
  [
    {
      Icon: User,
      question: "É profissional de tecnologia?",
      answer: "Expanda seus conhecimentos e faça network com outros profissionais."
    },
    {
      Icon: Student,
      question: "É estudante?",
      answer: "Tenha acesso a conversas e discussões interessantes e encontre mentores."
    },
  ],
  [
    {
      Icon: Swap,
      question: "Pretende mudar de carreira?",
      answer: "Mergulhe suavemente na sua carreira antes de dar o grande salto."
    },
    {
      Icon: Code,
      question: "É iniciante em programação?",
      answer: "Conecte-se com outros entusiastas e profissionais da área."
    },
  ]
]

export { recognitions, team, sponsors, cases };