import './Projects.css'

import { Link } from 'react-router-dom'
import { details } from '../product'
const Projects = () => {
    
    return (
        <div className='Projects space' id='Projects'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                {details.map((element, index) => {
                    return (
                        <div className="portfolio-item" key={index}>
                            <div className="portfolio-image">
                                <img src={element.img} alt="" />
                            </div>
                            <h3>{element.title} </h3>
                            <div className="portfolio-cta">
                                <Link to={`/Projects/${element.id}`} className="btn">Detailes</Link>
                                <a href={element.demo} className="btn btn-primary">Live Demo</a>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Projects
