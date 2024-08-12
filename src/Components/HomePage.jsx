import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import { menu } from './data'
import NavBar from './NavBar/NavBar'
import Certificates from './Certificates/Certificates'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { ThemeProvider, useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'
const HomePage = () => {
  const theme = useTheme();
  console.log(theme);
  const { darkMode } = theme || {};
  const [navbarPosition, setNavbarPosition] = useState('bottom');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setNavbarPosition('top'); // الانتقال إلى الأعلى عند الوصول لنهاية الصفحة
      } else {
        setNavbarPosition('bottom'); // إبقاء الـ navbar في الأسفل في غير هذه الحالة
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
      <div className={`  ${darkMode ? 'dark' : 'light'} `} >

        <Hero Dark={"../../public/img/dark.svg"} Light={"../../public/img/light.svg"} />
        <NavBar menu={menu} navbarPosition={navbarPosition}/>
        <About />
        <Skills />
        <Projects />

        <Certificates />
        <Contact />
        <Footer Dark={"../../public/img/dark.svg"} Light={"../../public/img/light.svg"} />

      </div>
    
  )
}

export default HomePage
