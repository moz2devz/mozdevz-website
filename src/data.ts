// Team members images
import igorImg from "../public/assets/team/igor.png";
import fenildeImg from "../public/assets/team/fenilde.png";
import odiliaImg from "../public/assets/team/odilia.png";
import fredImg from "../public/assets/team/fred.png";
import papsImg from "../public/assets/team/paps.jpg";
import carrimaImg from "../public/assets/team/carrima.png";

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
  { number: 6000, text: "Sensibilizados" },
  { number: 2000, text: "Membros" },
  { number: 600, text: "Formados" },
]

const team = [
  {
    name: "Igor L. Sambo",
    role: "Presidente",
    instagram: "https://www.instagram.com/LSambo02",
    twitter: "https://www.twitter.com/LSambo02",
    linkedin: "https://www.linkedin.com/in/igorlsambo",
    img: igorImg
  },
  {
    name: "Odília Nhacundela",
    role: "Vice-Presidente",
    instagram: "#",
    twitter: "https://twitter.com/odilia_nh",
    linkedin: "https://www.linkedin.com/in/od%C3%ADlia-nhacundela-0b6a7311b",
    img: odiliaImg
  },
  {
    name: "Carrima Januário",
    role: "Gestora de projectos",
    instagram: "https://www.instagram.com/carrima001",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/carrima-januario/",
    img: carrimaImg
  },
  {
    name: "Fred Cuambe",
    role: "Gestor de Comunidades",
    instagram: "https://www.instagram.com/fred_cuambe",
    twitter: "https://www.linkedin.com/in/fred-cuambe-7194a8240",
    linkedin: "#",
    img: fredImg
  },
  {
    name: "Fenilde Chiluvane",
    role: "Gestora de Comunicação",
    instagram: "https://www.instagram.com/fenilde_clelio/ ",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/fenilde-chiluvane-1994791b2",
    img: fenildeImg
  },
  {
    name: "Henrique (Mister Paps)",
    role: "Gestor de Imagem",
    instagram: "#",
    twitter: "https://twitter.com/themisterpaps",
    linkedin: "https://www.linkedin.com/in/henriquechigumane",
    img: papsImg
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