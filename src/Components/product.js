import imgfood from '../assets/img/food1.png'
import food2 from '../assets/img/food2.png'
import food3 from '../assets/img/food3.png'
import food4 from '../assets/img/food4.png'
import food5 from '../assets/img/food5.png'
import food6 from '../assets/img/food6.png'

import imgtravel from '../assets/img/travel.png'
import travel2 from '../assets/img/travel2.png'
import travel3 from '../assets/img/travel3.png'
import travel4 from '../assets/img/travel4.png'
import imgfurniture from '../assets/img/furniture.png'
import furniture2 from '../assets/img/furniture2.png'
import furniture3 from '../assets/img/furniture3.png'
import furniture4 from '../assets/img/furniture4.png'

import Book1 from '../assets/img/Books1.png'
import Book2 from '../assets/img/books2.png'
import Book3 from '../assets/img/books3.png'
export const menu = [{ title: "#Home", icon: "fa-solid fa-house-user" },
{ title: "#About", icon: "fa-solid fa-circle-info" },
{ title: "#Skills", icon: "fa-solid fa-screwdriver-wrench" },
{ title: "#Projects", icon: "fa-solid fa-briefcase" },
{ title: "#Certificates", icon: "fa-solid fa-receipt" },
{ title: "#Contact", icon: "fa-solid fa-address-book" }
]


export const details = [
    {
        img: imgfood,
        id: 1,
        title: "healthy-food-website",
        demo: "https://healthy-food-website-jet.vercel.app/",
        "description": 'A multi-page website that sells healthy foods and many services ',
        "imgs": [imgfood, food2, food3, food4, food5, food6],
        "urlgh": 'https://github.com/Eman-Almokdad/healthy-food-website',
        "tools": ["Nextjs ", " Mongodb ", "Reactjs ","Bootstrap", "CSS ", "HTML"],
    },
    {
        img: Book1,
        id: 2,
        title: "Books Store Website",
        demo: "https://books-store-eman.vercel.app/",
        "description": 'A single-page website for displaying and selling books ',
        "imgs": [Book2 , Book3],
        "urlgh": 'https://github.com/Eman-Almokdad/BooksStore.git',
        "tools": ["Reactjs ","API ","CSS ", "HTML" ],
    },
    {
        img: imgtravel,
        id: 3,
        title: "Travel Website",
        demo: "https://eman-almokdad.github.io/react1/",
        "description": 'A multi-page website that sells displaying and selling trips ',
        "imgs": [imgtravel, travel2, travel3, travel4],
        "urlgh": 'https://github.com/Eman-Almokdad/react1',
        "tools": [" Reactjs ", "CSS ", "HTML"],
    },
    {
        img: imgfurniture,
        id: 4,
        title: "Furniture Website",
        demo: "https://eman-almokdad.github.io/task5/",
        "description": 'A single-page website for displaying and selling furniture',
        "imgs": [imgfurniture, furniture2, furniture3, furniture4],
        "urlgh": 'https://github.com/Eman-Almokdad/task5',
        "tools": ["CSS ", "HTML"],
    },
    

]

export const CertificatesCards = [
    {
        year: "2024-2026",
        edu: "Master in Web Sciences (MWS)",
        university: "Syrian Virtual University"
    },
    {
        year: "2021-2024",
        edu: "Bachelor in Information Technology (BAIT) _ISDN",
        university: "Syrian Virtual University"
    },
    {
        year: "2018-2020",
        edu: "Computer Technical Institute/Software Engineering",
        university: "Damascus University"
    },

]

export const contactBox = [
    {
        img: "fa-solid fa-circle-user",
        title1: "Full Name",
        title2: "Eman Adnan AL-Mokdad"
    },
    {
        img: "fa-regular fa-envelope",
        title1: "Email",
        title2: "eman.a.almokdad.a@gmail.com"
    },
    {
        img: "fa-brands fa-whatsapp",
        title1: "Mobile Number",
        title2: "+96309-------"
    },
]