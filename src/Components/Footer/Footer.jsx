import { useTheme } from '../ThemeProvider';
import './Footer.css'
const Footer = ({Dark , Light}) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className='footer space'>
      <p>To communicate with me :</p>
      <div className="social">
        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
        <a href=""><i className="fa-brands fa-instagram"></i></a>
        <a href=""><i className="fa-regular fa-envelope"></i></a>
        <a href=""><i className="fa-brands fa-github"></i></a>
        <img src={darkMode ? `${Light}`: `${Dark}`   } alt="" onClick={toggleTheme} className='toggleTheme'/>
      </div>
    </div>
  )
}

export default Footer