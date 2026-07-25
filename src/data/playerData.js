import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'

import argentina from '@assets/argentina.webp'
import escudo_serena from '@assets/escudo_serena.webp'
//Escudos trayectoria
import escudoAcassuso from '@assets/escudos/escudo_acassuso.webp'
import escudoChacarita from '@assets/escudos/escudo_chacarita.webp'
import escudoGuemes from '@assets/escudos/escudo_guemes.webp'
import escudoLigadequito from '@assets/escudos/escudo_ligadequito.webp'
import escudoTigre from '@assets/escudos/escudo_tigre.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
import image8 from '@assets/gallery/image8.webp'
import image9 from '@assets/gallery/image9.webp'
import image10 from '@assets/gallery/image10.webp'
import image11 from '@assets/gallery/image11.webp'
import image12 from '@assets/gallery/image12.webp'
import image13 from '@assets/gallery/image13.webp'
import image14 from '@assets/gallery/image14.webp'
import image15 from '@assets/gallery/image15.webp'
import image16 from '@assets/gallery/image16.webp'
import image17 from '@assets/gallery/image17.webp'
import image18 from '@assets/gallery/image18.webp'
import image19 from '@assets/gallery/image19.webp'
import image20 from '@assets/gallery/image20.webp'
import zanini3 from '@assets/zanini3.webp'
//Video
import photoGraph from '@assets/perfil_video.webp'
//Prensa
import logo1 from '@assets/logos/logo1.webp'
import logo2 from '@assets/logos/logo2.webp'
import logo3 from '@assets/logos/logo3.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'ANDRES'
const fullName = 'ZANINI'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`,
  displayName: `${name} ${fullName}`,
  number: 2,
  position: 'Defensor Central',
  positionShort: 'DC',
  nationality: 'Argentina',
  nationalityFlag: argentina,
  age: 29,
  height: '1.88m',
  weight: '80kg',
  foot: 'Derecho',
  birthDate: '18 / 01 / 1997  ',
  birthPlace: 'Buenos Aires, Argentina',
  currentClub: 'Deportes La Serena',
  logoCurrentClub: escudo_serena,
  image: polaco1,
  

  stats: [
    { label: 'Velocidad',      value: 90 },
    { label: 'Juego Aéreo',     value: 92 },
    { label: 'Intercepciones',         value: 85 },
    { label: 'Pases',    value: 86 },
    { label: 'Presión Alta',   value: 87 },
    { label: 'Visión de Juego',value: 89 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 45},
    { label: 'Recuperaciones',       value: 95},
    { label: 'Pases Completos', value: 922},
    { label: 'Duelos Ganados', value: 150},
    { label: 'Min / Part.', value: "2,775'" },
    { label: 'Valoración', value: 8.4},

  ],

  clubs: [
    {
      name:    'Deportes La Serena',
      country: 'Chile',
      years:   '2025 — Actualidad',
      logo:    escudo_serena,
      titles:  [],
      info:    '',
    },
    {
      name:    'Liga de Quito',
      country: 'Ecuador',
      years:   '2024 — 2025',
      logo:    escudoLigadequito,
      titles:  ['Serie A de Ecuador 2024'],
      info:    'Préstamo',
    },
    {
      name:    'Chacarita Juniors',
      country: 'Argentina',
      years:   '2023 — 2024',
      logo:    escudoChacarita,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'C.A Güemes',
      country: 'Argentina',
      years:   '2022 — 2023',
      logo:    escudoGuemes,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'Acassuso',
      country: 'Argentina',
      years:   '2018 — 2024',
      logo:    escudoAcassuso,
      titles:  [],
      info:    '',
    },
    {
      name:    'C.A. Tigre',
      country: 'Argentina',
      years:   '2017',
      logo:    escudoTigre,
      titles:  [],
      info:    'Inferiores y Reserva',
    },

  ],

  videos: [
    {
      id: 'v2',
      instagramId: 'DJ211zuqe19',
      title: 'Gol vs Dep. Iquique',
      fullTitle: 'Andres Zanini | Gol \'26',
      season: 'Gol vs Dep. Iquique',
      league: 'LIGA 1 2025',
      thumbnail: image2,
      cover: image2,
      category: 'Deportes La Serena',
    },
    {
      id: 'v3',
      instagramId: 'DTIuYwdkQPL',
      title: 'Highlight \'25',
      fullTitle: 'Andres Zanini | Jugadas destacadas \'25',
      season: 'Highlight  \'25',
      league: 'Liga 1',
      thumbnail: image9,
      cover: image9,
      category: 'Highlights',
    },
    
    {
      id: 'v3',
      instagramId: 'C1iPcg_rJB0',
      title: 'Highlight Chacarita \'23',
      fullTitle: 'Andres Zanini | Asistencias y juego',
      season: 'Highlight Chacarita \'23',
      league: 'Liga Argentina 2023',
      thumbnail: zanini3,
      cover: zanini3,
      category: 'Highlights',
    },
  ],



  gallery: [
    { id: 1, src: image1, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 2, src: image2, alt: 'Andres Zanini', caption: 'Universitario',    category: 'Festejo', aspect: 'tall' },
    { id: 3, src: image3, alt: 'Andres Zanini', caption: 'Universitario', category: 'Entrenamiento', aspect: 'square' },
    { id: 4, src: image4, alt: 'Andres Zanini', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 5, src: image5, alt: 'Andres Zanini', caption: 'Universitario',   category: 'Equipo',  aspect: 'wide' },
    { id: 6, src: image6, alt: 'Andres Zanini', caption: 'Universitario',       category: 'Retrato', aspect: 'tall' },
    { id: 7, src: image7, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 8, src: image8, alt: 'Andres Zanini', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 9, src: image9, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 10, src: image10, alt: 'Andres Zanini', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 11, src: image11, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 12, src: image12, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 13, src: image13, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 14, src: image14, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 15, src: image15, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 16, src: image16, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 17, src: image17, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 18, src: image18, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 19, src: image19, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 20, src: image20, alt: 'Andres Zanini', caption: 'Universitario', category: 'Partido', aspect: 'wide' },

  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@andrees_zani',
      url: 'https://www.instagram.com/andrees_zani/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '/andres-zanini',
      url: 'https://www.transfermarkt.com.ar/andres-zanini/profil/spieler/504397',
      hoverColor: '#2e73f2',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:       moon,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(139,69,19,0.18)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image: ledsports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
    },
  ],
}
