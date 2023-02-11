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

export { recognitions, team, sponsors };