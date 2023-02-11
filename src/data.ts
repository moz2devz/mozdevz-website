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
  { number: 1000, text: "Sensibilizados" },
  { number: 200, text: "Meetups" },
  { number: 800, text: "Membros" },
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
    name: "Carrima Januario", 
    role: "Gestora de projectos", 
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
  }
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
      answer: "Com uma comunidade que ostenta uma interessante mistura de profissionais, sem duvidas é o melhor sitio para fazer networking." 
    },
    { 
      Icon: Student, 
      question: "É estudante?",
      answer: "É estudante? Temos mazas da indústria tech que passam por aqui para ter conversas e discussões interessantes. Obviamente é o melhor local para encontrar mentores." 
    },
  ],
  [
    { 
      Icon: Swap, 
      question: "Pretende mudar de carreira para a tecnologia?",
      answer: "Pretende mudar de carreira para tech? Parece assustador pois? Fazer parte da comunidade lhe possibilita mergulhar suavemente na sua carreira antes de dar o grande salto." 
    },
    { 
      Icon: Code, 
      question: "É iniciante em programação?",
      answer: "A união faz a força. Não comece sozinho ou isolado, a prática de programação e desenvolvimento de software é muito mais satisfatoria quando é feita em grupo." 
    },
  ]
]

export { recognitions, team, sponsors, cases };