import { useEffect, useState } from 'react';
import  './NavBar.css'

const NavBar = ({menu , navbarPosition}) => {
/*   const [navbarPosition, setNavbarPosition] = useState('bottom');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setNavbarPosition('top'); // الانتقال إلى الأعلى عند الوصول لنهاية الصفحة
      } else {
        setNavbarPosition('bottom'); // إبقاء الـ navbar في الأسفل في غير هذه الحالة
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */
  return (
    <nav className={` ${navbarPosition === 'top' ? 'navbar-top' : 'navbar-bottom'}`}>
      <ul>
        {
          menu.map((ele , index)=>{return( 
            <li key={index}><a href={ele.title} className={({ isActive }) =>
              isActive ? "active" : ""
          }><i className={ele.icon}></i> </a></li>
          )
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar