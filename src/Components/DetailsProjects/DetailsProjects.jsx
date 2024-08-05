import './DetailsProjects.css'
import { useParams } from 'react-router-dom';
import { details } from '../product';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import { useTheme } from '../HomePage';
const DetailsProjects = () => {
    const theme = useTheme();
    console.log(theme);
    const { darkMode } = theme || {};
    const { id } = useParams();
    const card = details.find(card => card.id === parseInt(id));
    const imgArray = card.imgs
    const skillsarray = card.tools

    return (
        <div className={` ${darkMode ? 'dark' : 'light'}  , pt-128 `}>
            <div className={`  , Details ,  `} >
                <div className='container'>
                    <div className='about-me'>
                        <div className='container-img'>
                            {imgArray.map((Element, index) => {
                                return (
                                    <img src={Element} alt="" key={index} />
                                )
                            })}

                        </div>
                    </div>
                    <div className='container-text'>
                        <h3>{card.description}</h3>
                        <h3>Skills :</h3>
                        <div className='child'>

                            {skillsarray.map((element, index) => {
                                return (
                                    <div key={index}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                        <h4>{element}</h4>
                                    </div>
                                )
                            })}
                            <a href={card.demo} className="btn btn-primary">Live Demo</a>
                            <a href={card.urlgh} className="btn btn-primary">Go To GitHub</a>
                        </div>

                    </div>
                </div>
            </div>
            <Projects />
            <Footer />
        </div>
    )
}

export default DetailsProjects
