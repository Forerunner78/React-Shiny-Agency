import amelieLeroy from '../assets/freelances/amelie_leroy.jpeg'
import julienBrun from '../assets/freelances/julien_brun.jpeg'
import arielleGautier from '../assets/freelances/arielle_gautier.jpeg'
import marineCarpentier from '../assets/freelances/marine_carpentier.jpeg'
import lucilleBarre from '../assets/freelances/lucille_barre.jpeg'
import clementRolland from '../assets/freelances/clement_rolland.jpeg'
import gregoireChevalier from '../assets/freelances/gregoire_chevalier.jpeg'
import raphaelRodriguez from '../assets/freelances/raphael_rodriguez.jpeg'
import hugoVysa from '../assets/freelances/hugo_vysa.jpeg'
import minaToman from '../assets/freelances/mina_toman.jpeg'
import maximeLebrun from '../assets/freelances/maxime_lebrun.jpeg'

const freelancesData = [
    {
        id: '1',
        name: 'Julien Brun',
        job: 'Développeur mobile',
        picture: julienBrun,
        skills: ['React Native'],
        location: 'Lyon',
        available: true,
        tjm: 500,
    },
    {
        id: '2',
        name: 'Arielle Gautier',
        job: 'Développeuse fullstack',
        picture: arielleGautier,
        skills: ['Node JS', 'Vue.js', 'React', 'AWS'],
        location: 'Paris',
        available: false,
        tjm: 620,
    },
    {
        id: '3',
        name: 'Marine Carpentier',
        job: 'Développeuse frontend',
        picture: marineCarpentier,
        skills: ['React', 'Gatsby', 'Next.js'],
        location: 'Bordeaux',
        available: true,
        tjm: 520,
    },
    {
        id: '4',
        name: 'Lucille Barre',
        job: 'Product Designer',
        picture: lucilleBarre,
        skills: ['Figma', 'Webflow'],
        location: 'Lille',
        available: false,
        tjm: 650,
    },
    {
        id: '5',
        name: 'Clément Rolland',
        job: 'Développeur mobile',
        picture: clementRolland,
        skills: ['IOS', 'Android'],
        location: 'Lyon',
        available: false,
        tjm: 450,
    },
    {
        id: '6',
        name: 'Grégoire Chevalier',
        job: 'Développeur backend',
        picture: gregoireChevalier,
        skills: ['Python', 'Django', 'Docker'],
        location: 'Paris',
        available: true,
        tjm: 510,
    },
    {
        id: '7',
        name: 'Raphaël Rodriguez',
        job: 'Designer',
        picture: raphaelRodriguez,
        skills: ['Sketch', 'Illustrator'],
        location: 'Paris',
        available: true,
        tjm: 480,
    },
    {
        id: '8',
        name: 'Hugo Vysa',
        job: 'Développeur frontend',
        picture: hugoVysa,
        skills: ['SEO', 'Javascript Vanilla'],
        location: 'Toulouse',
        available: false,
        tjm: 560,
    },
    {
        id: '9',
        name: 'Mina Toman',
        job: 'Développeuse Mobile',
        picture: minaToman,
        skills: ['Android', 'React Native'],
        location: 'Bayonne',
        available: true,
        tjm: 630,
    },
    {
        id: '10',
        name: 'Amélie Leroy',
        job: 'Développeuse backend',
        picture: amelieLeroy,
        skills: ['Node.js', 'Express', 'Docker'],
        location: 'Paris',
        available: false,
        tjm: 400,
    },
    {
        id: '11',
        name: 'Maxime Lebrun',
        job: 'Intégrateur SEO',
        picture: maximeLebrun,
        skills: ['SEO'],
        location: 'Rennes',
        available: false,
        tjm: 600,
    },
]

export default freelancesData
