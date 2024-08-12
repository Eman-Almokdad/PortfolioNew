import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import LogoDark from './assets/images/dark.svg'
import LogoLight from './assets/images/light.svg'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import { createContext, useContext, useEffect, useState } from 'react'
import Projects from './pages/Projects'
import { Outlet } from 'react-router-dom'
import Skills from './pages/Skills'
import Footer from './components/Footer/Footer'
import Certificates from './pages/Certificates'

export const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

function App() {

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
          <NavBar Dark={LogoDark} Light={LogoLight} />
          <Hero />
          <About />
          <Skills/>
          
          <Projects/>
          <Certificates/>
          <Contact/>
          <Footer/>
          {/* <Outlet /> */}
        </ThemeContext.Provider>
      </div>
    
  )
}

export default App
