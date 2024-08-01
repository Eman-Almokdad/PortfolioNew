import React, { createContext, useContext, useEffect, useState } from 'react'
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
export const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
const HomePage = () => {
  const storedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(storedTheme === 'dark');
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`  ${darkMode ? 'dark' : 'light'} `} >
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <Hero Dark={LogoDark} Light={LogoLight}/>
      <NavBar menu={menu} />
      <About />
      <Skills/>
      <Projects/>
      <Certificates />
      <Contact/>
      <Footer/>
      </ThemeContext.Provider>
    </div>
  )
}

export default HomePage
