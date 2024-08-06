
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DetailsProjects from './Components/DetailsProjects/DetailsProjects'
import Projects from './Components/Projects/Projects'
import HomePage from './Components/HomePage'
import { ThemeProvider } from './Components/ThemeProvider'
function App() {

  return (
    
    <>
    <ThemeProvider>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Projects/:id" element={<DetailsProjects/>} />
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
