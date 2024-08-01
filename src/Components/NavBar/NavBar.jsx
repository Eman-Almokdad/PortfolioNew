import  './NavBar.css'

const NavBar = ({menu}) => {
  return (
    <nav>
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