import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import { menu } from './product'
import NavBar from './NavBar/NavBar'
import Certificates from './Certificates/Certificates'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import LogoDark from '../assets/img/dark.svg'
import LogoLight from '../assets/img/light.svg'
import { ThemeProvider, useTheme } from './ThemeProvider'
const HomePage = () => {
  const theme = useTheme();
  console.log(theme);
  const { darkMode } = theme || {};
  return (
    
      <div className={`  ${darkMode ? 'dark' : 'light'} `} >

        <Hero Dark={LogoDark} Light={LogoLight} />
        <NavBar menu={menu} />
        <About />
        <Skills />
        <Projects />

        <Certificates />
        <Contact />
        <Footer />

      </div>
    
  )
}

export default HomePage
