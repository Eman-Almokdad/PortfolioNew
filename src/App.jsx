
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DetailsProjects from './Components/DetailsProjects/DetailsProjects'
import Projects from './Components/Projects/Projects'
import HomePage from './Components/HomePage'
function App() {

  return (
    
    <>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Projects/:id" element={<DetailsProjects/>} />
      </Routes>
    </>
  )
}

export default App
