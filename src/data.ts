// Team members images
import igorImg from '../public/assets/team/igor.webp'
import fenildeImg from '../public/assets/team/fenilde.jpg'
import odiliaImg from '../public/assets/team/odilia.webp'
import papsImg from '../public/assets/team/paps.jpg'
import carrimaImg from '../public/assets/team/carrima.webp'
import melanieImg from '../public/assets/team/melanie.jpg'

// Sponsors logo
import espaco_uem from '../public/assets/sponsors/espaco_uem.png'
import ciuemLogo from '../public/assets/sponsors/ciuem.png'
import coworklabLogo from '../public/assets/sponsors/coworklab.png'
import banco_mundialLogo from '../public/assets/sponsors/banco_mundial.png'
import mctestpLogo from '../public/assets/sponsors/mctestp.png'
import oxfamLogo from '../public/assets/sponsors/oxfam.png'
import psiLogo from '../public/assets/sponsors/psi.png'
import reinoLogo from '../public/assets/sponsors/reino.png'
import adeLogo from '../public/assets/sponsors/ADE.png'
import fsdmocLogo from '../public/assets/sponsors/FSDMoc.png'
import kabumLogo from '../public/assets/sponsors/Kabum_logo.png'
import standard_bankLogo from '../public/assets/sponsors/standard_bank.png'
import vodacomLogo from '../public/assets/sponsors/Vodacom-Logo.wine.png'

// Schools logos
import isutcLogo from "../public/assets/schools/isutc.png";
import lurioLogo from "../public/assets/schools/lurio.png";
import nauticaLogo from "../public/assets/schools/nautica.png";
import ujcLogo from "../public/assets/schools/ujc.png";
import up_maputoLogo from "../public/assets/schools/up_maputo.png";

// Cases Icons
import { User, Student, Swap, Code } from 'phosphor-react'

const recognitions = [
  { number: 6000, text: 'Sensibilizados' },
  { number: 2000, text: 'Membros' },
  { number: 600, text: 'Formados' },
]

const team = [
  {
    name: 'Igor L. Sambo',
    role: 'Presidente',
    instagram: 'https://www.instagram.com/LSambo02',
    twitter: 'https://www.twitter.com/LSambo02',
    linkedin: 'https://www.linkedin.com/in/igorlsambo',
    img: igorImg,
  },
  {
    name: 'Odília Nhacundela',
    role: 'Vice-Presidente',
    instagram: null,
    twitter: 'https://twitter.com/odilia_nh',
    linkedin: 'https://www.linkedin.com/in/od%C3%ADlia-nhacundela-0b6a7311b',
    img: odiliaImg,
  },
  {
    name: 'Carrima Januário',
    role: 'Gestora de projectos',
    instagram: 'https://www.instagram.com/carrima001',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/carrima-januario/',
    img: carrimaImg,
  },
  {
    name: 'Melanie Nhanzilo',
    role: 'Gestora de Comunidades',
    instagram: 'https://www.instagram.com/milenanhanzilo',
    twitter: null,
    linkedin:
      'https://www.linkedin.com/in/melanie-nhanzilo-b404b2247',
    img: melanieImg,
  },
  {
    name: 'Fenilde Chiluvane',
    role: 'Gestora de Marketing',
    instagram:
      'https://instagram.com/fenilde_clelio',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/fenilde-chiluvane-1994791b2',
    img: fenildeImg,
  },
  {
    name: 'Henrique Chigumane',
    role: 'Gestor de Tecnologia',
    instagram: 'https://www.instagram.com/themisterpaps',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/henriquechigumane',
    img: papsImg,
  },
]

const sponsors = [
  {
    name: 'Ciuem',
    logo: ciuemLogo,
  },
  {
    name: 'Espaço de Inovação',
    logo: espaco_uem,
  },
  {
    name: 'Co-work lab',
    logo: coworklabLogo,
  },
  {
    name: 'Banco Mundial',
    logo: banco_mundialLogo,
  },
  {
    name: 'Ministério da Ciência, Tecnologia e Ensino Superior',
    logo: mctestpLogo,
  },
  {
    name: 'OX Fam',
    logo: oxfamLogo,
  },
  {
    name: 'psi',
    logo: psiLogo,
  },
  {
    name: 'Reino dos Países baixos',
    logo: reinoLogo,
  },
  {
    name: 'ADE',
    logo: adeLogo,
  },
  {
    name: 'FSDMoç',
    logo: fsdmocLogo,
  },
  {
    name: 'Kabum Digital (93Interactions)',
    logo: kabumLogo,
  },
  {
    name: 'Standard Bank',
    logo: standard_bankLogo,
  },
  {
    name: 'Vodacom',
    logo: vodacomLogo,
  },
]

const cases = [
  [
    {
      Icon: User,
      question: 'É profissional de tecnologia?',
      answer:
        'Expanda seus conhecimentos e faça network com outros profissionais.',
    },
    {
      Icon: Student,
      question: 'É estudante?',
      answer:
        'Tenha acesso a conversas e discussões interessantes e encontre mentores.',
    },
  ],
  [
    {
      Icon: Swap,
      question: 'Pretende mudar de carreira?',
      answer:
        'Mergulhe suavemente na sua carreira antes de dar o grande salto.',
    },
    {
      Icon: Code,
      question: 'É iniciante em programação?',
      answer: 'Conecte-se com outros entusiastas e profissionais da área.',
    },
  ],
]

const schools=[
  {
    name: 'ISUTC',
    logo: isutcLogo,
  },
  {
    name: 'UNILÚRIO',
    logo: lurioLogo,
  },
  {
    name: 'NAUTICA',
    logo: nauticaLogo,
  },
  {
    name: 'UJC',
    logo: ujcLogo,
  },
  {
    name: 'UP Maputo',
    logo: up_maputoLogo,
  }
]
export { recognitions, team, sponsors, cases, schools }