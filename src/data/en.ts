import { icons, schoolsLogos, sponsorsLogos, teamMembers } from './data'
const recognitions = [
  { number: 6000, text: 'Aware' },
  { number: 2000, text: 'Members' },
  { number: 600, text: 'Trained' },
]
const team = [
  {
    name: 'Valquiria Pondja',
    role: 'President',
    instagram:
      'https://www.instagram.com/valquiria.pondja/profilecard/?igsh=Njg3a3ZicXN0Zm81',
    twitter: 'https://x.com/shannypondja',
    linkedin:
      'https://www.linkedin.com/in/valqu%C3%ADria-pondja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    img: teamMembers.valquiriapondja,
  },
  {
    name: 'Melanie Nhanzilo',
    role: 'Vice-President',
    instagram: 'https://www.instagram.com/melanienhanzilo',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/melanie-nhanzilo-64695232a',
    img: teamMembers.melanienhanzilo,
  },
  {
    name: 'Dário Pacule',
    role: 'Marketing and Brand Manager',
    instagram: 'https://www.instagram.com/dario_pacule',
    twitter: 'https://x.com/dariopacule',
    linkedin: 'https://www.linkedin.com/in/dariopacule',
    img: teamMembers.dariopacule,
  },
  {
    name: 'Edicélio Savanguane',
    role: 'Designer',
    instagram: 'https://www.instagram.com/odesigner.psd',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/edicelio',
    img: teamMembers.ediceliosavanguane,
  },
  {
    name: 'Fenilde Chiluvane',
    role: 'Communication Manager',
    instagram: 'https://instagram.com/fenilde_clelio',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/fenilde-chiluvane-1994791b2',
    img: teamMembers.fenildechiluvane,
  },
  {
    name: 'Malagy Cassimo',
    role: 'IT/Developer',
    instagram: 'https://www.instagram.com/malagy.malagy',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/malagycassimo',
    img: teamMembers.malagycassamo,
  },
  {
    name: 'Walter Cumbucane',
    role: 'Community Manager',
    instagram: 'https://www.instagram.com/walter_cumbucane/',
    twitter: null,
    linkedin: 'https://www.linkedin.com/in/walter-cumbucane-23b3b6231',
    img: teamMembers.waltercumbucane,
  },
]
const sponsors = [
  { name: 'Ciuem', logo: sponsorsLogos.ciuem },
  { name: 'Innovation Space', logo: sponsorsLogos.espaco_uem },
  { name: 'Co-work lab', logo: sponsorsLogos.coworklab },
  { name: 'World Bank', logo: sponsorsLogos.banco_mundial },
  {
    name: 'Ministry of Science, Technology and Higher Education',
    logo: sponsorsLogos.mctestp,
  },
  { name: 'OX Fam', logo: sponsorsLogos.oxfam },
  { name: 'psi', logo: sponsorsLogos.psi },
  { name: 'Kingdom of the Netherlands', logo: sponsorsLogos.reino },
  { name: 'ADE', logo: sponsorsLogos.ade },
  { name: 'FSDMoç', logo: sponsorsLogos.fsdmoc },
  { name: 'Kabum Digital (93Interactions)', logo: sponsorsLogos.kabum },
  { name: 'Standard Bank', logo: sponsorsLogos.standard_bank },
  { name: 'Vodacom', logo: sponsorsLogos.vodacom },
]

const whyMozDevz = [
  [
    {
      Icon: icons.User,
      question: 'Are you a technology professional?',
      answer: 'Expand your knowledge and network with other professionals.',
    },
    {
      Icon: icons.Student,
      question: 'Are you a student?',
      answer:
        'Access interesting conversations and discussions and find mentors.',
    },
  ],
  [
    {
      Icon: icons.Swap,
      question: 'Are you planning a career change?',
      answer: 'Dive smoothly into your career before taking the big leap.',
    },
    {
      Icon: icons.Code,
      question: 'Are you a beginner in programming?',
      answer: 'Connect with other enthusiasts and professionals in the field.',
    },
  ],
]

const schools = [
  { name: 'ISUTC', logo: schoolsLogos.isutc },
  { name: 'UNILÚRIO', logo: schoolsLogos.lurio },
  { name: 'NAUTICA', logo: schoolsLogos.nautica },
  { name: 'UJC', logo: schoolsLogos.ujc },
  { name: 'UP Maputo', logo: schoolsLogos.up_maputo },
]

const staticContent = {
  heroTitle: 'The largest community of developers in Mozambique',
  heroSubtitle: 'We impact thousands of developers and boost careers',
  heroInvitation: 'Join the community',
  cardsAreaTitle: 'Learning together as a community',
  cardsAreaSubtitle:
    'We provide opportunities for knowledge sharing and skill development in creating digital products to young people during their training period, and we contribute to society by developing solutions.',
  cardsAreaInvitation: 'Learn more',
  revealTitle: 'We impact thousands of developers and boost careers',
  revealSubtitle:
    'We are a community of Mozambican software and application developers. We use our talents to contribute to the social development of the community we are part of.',
  revealInvitation: 'Learn more',
  talentsTitle: 'Talents',
  talentsSubtitle:
    'We empower and develop talents with the goal of preparing and integrating them into the job market through our network of partners.',
  startupTitle: 'Startup',
  startupSubtitle:
    'We support multidisciplinary teams with guidance and training in developing technological solutions in highly uncertain environments.',
  corporateTitle: 'Corporate',
  corporateSubtitle:
    'We form partnerships and work with companies and NGOs to develop technology-based solutions for social problems.',
  teamTitle: 'MozDevz Team',
  teamSubtitle:
    'The team responsible for leading this immense community of developers from Rovuma to Maputo',
  sponsorsTitle: 'Partners and sponsors',
  sponsorsSubtitle:
    'Partners and sponsors who support us in organizing events, workshops, and projects that help drive the development of the community',
  schoolsTitle: 'MozDevz Schools',
  schoolsSubtitle:
    'Universities committed to the success and excellence of students in technological sciences through education and innovation, which help encourage the development of the MozDevz community',
  headerTitle: 'Mozdevz - Mozambican Community of Developers',
  headerSubtitle: 'Join the community',
  langChange: 'Change language',
  aboutTitle: 'Who we are',
  aboutSubtitle: 'Meet our team',
  aboutDescription:
    'We are a community of Mozambican software and application developers who use our talents to contribute to the social development of the community we are part of.',
  aboutDescription2:
    'We believe in the power of information and communication technologies (ICTs) to change lives. We see ICTs as essential infrastructure to aid service delivery and reduce social problems.',
  identityTitle: 'Our Identity',
  identitySubtitle: 'Community. Technology. Experiences',
  missionTitle: 'Mission',
  missionSubtitle:
    'Using ICTs to develop the country through empowerment, teamwork, and knowledge sharing to make Mozambique a regional reference for technological solutions.',
  visionTitle: 'Vision',
  visionSubtitle:
    'Being an active and collaborative platform that promotes local, continental, and global integration of communities through the use of technology.',
  valuesTitle: 'Values',
  valuesSubtitle:
    'We value collaboration, innovation, and the creation of local solutions for local problems.',
  manifestoTitle: 'Our Manifesto',
  manifesto1:
    'We believe in the power of information and communication technologies (ICTs) to change lives. We see ICTs as essential infrastructure to aid service delivery and reduce social problems.',
  manifesto2:
    'While our ultimate goal is to improve the lives of people living in communities, we believe that the best way to do this is through collaboration with organizations - NGOs, multilateral organizations, government institutions, or the private sector - that provide vital education, relief, financial services, and more.',
  manifesto3:
    'Each of these organizations has distinct goals and needs; Similarly, when it comes to appropriate technologies, we reject a one-size-fits-all approach.',
  manifesto4:
    'We believe that even the most appropriate and sustainable technology requires an ecosystem of human skills to endure. MozDevz works with professionals in the country to build their capacity to develop and manage ICT projects, thus nurturing the ecosystem and the local ICT economy to ensure the sustainability of current and future projects.',
  manifesto5:
    'MozDevz is a non-profit organization with a clear social mission - to amplify and maximize the impact of ICTs on the lives of those who need them most. We see the beneficiaries of our work as partners in a joint effort to improve the quality of life.',
  joinUs: 'Join us!',
  contactTitle: 'Always here for a chat',
  contactSubtitle: 'Get in touch',
  contactInvitation:
    'We are always looking for new partners who can benefit from our expertise and collaborate with us to develop amazing projects together.',
  placeholderName: 'Name',
  placeholderTopic: 'Subject',
  placeholderMessage: 'Message',
  submit: 'Submit',
  visitUs: 'Visit us',
  callUs: 'Call us',
  writeToUs: 'Write to us',
  seeMore: 'See more',
  followOn: 'Follow on',
}
const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const events = [
  {
    image: 'event-data-wave-24-66782b3fb5090.webp',
    title: 'Data Wave: Data and AI Conference',
    tags: [
      { color: '#E9D5FF', title: 'Data' },
      { color: '#CBD5E1', title: 'AI' },
    ],
    date: 'September 14, 2024',
    location: 'To Be Announced',
    link: 'https://datawave.mozdevz.org/',
  },
  {
    image: 'khodar-2-1-66782618374c4.webp',
    title: 'Khodar (Season 2)',
    tags: [{ color: '#CCFBF1', title: 'Development' }],
    date: 'July 8, 2024',
    location: 'Online',
    link: 'https://forms.gle/9UgGFMeMHyevQqhq7',
  },
  {
    image: 'cyberconnect-66781ddab3235.webp',
    title: 'MozCyber Connect',
    tags: [{ color: '#FEF3C7', title: 'Cybersecurity' }],
    date: 'May 4 - June 1, 2024',
    location: 'Online',
    link: 'https://www.youtube.com/watch?v=TgXbZ-DZCy8&list=PLgx8AvFCHjcswvCZyDV4HJ3ckerA1N18B',
  },
]
export {
  recognitions,
  team,
  sponsors,
  whyMozDevz,
  schools,
  staticContent,
  menuItems,
  events,
}
