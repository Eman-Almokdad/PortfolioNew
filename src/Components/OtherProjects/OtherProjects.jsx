import './OtherProjects.css'
import { details } from '../product'
import { Link } from 'react-router-dom'
const OtherProjects = () => {
  return (
<div className='OtherProjects space' id='Projects'>
            {/* <h5>Other projects</h5> */}
            <h2>Other projects</h2>
            <div className="container portfolio-container">
                {
                    details.map((element , index)=>{return(
                        <div className='circle' key={index}>
                            <Link to={`/Projects/${element.id}`} >
                            <img src={element.img} alt="" />
                            </Link>
                        
                    </div>
                    )})
                }

            </div>
        </div>
  )
}

export default OtherProjects
