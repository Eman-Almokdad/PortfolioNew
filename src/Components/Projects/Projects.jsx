import './Projects.css'

import { Link } from 'react-router-dom'
import { details } from '../product'
import Slider from './Slider'
const Projects = () => {

    return (
        <div className='Projects space' id='Projects'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                <Slider slides={details} />
            </div>
        </div>
    )
}

export default Projects
