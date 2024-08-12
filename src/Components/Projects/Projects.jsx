import './Projects.css'
import { details } from '../data'
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
