import React, { useState } from 'react'
import css from "./Navbar.module.css";
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [isChecked, setIsChecked] = useState(0);

 
  

  return (
    <header>
    <nav className={css.navbar}>
       <div className={css.logo}>Logo</div>
       <div className={css.navOptions}>
       <Link to="/" >Home</Link>
       <Link to="/about" >About</Link>
     </div>
    </nav>
      
      

  <input checked={isChecked} 
         onChange={(e) => {setIsChecked(e.target.checked)}}
         style={{display: "none"}} 
         type="checkbox" 
         id="nav-toggle" 
         className={css["nav-btn"]} />
  <label style={{ position: "absolute", 
                top: "0.4rem", right: "0.5rem", 
                cursor: "pointer"
                }} 
         htmlFor="nav-toggle">
    <span className={css.hamburger} style={{color:"white"}}>{(isChecked==true)?"X":"☰"}</span> 
  </label>
  
     
    <div className={css.dropdownOptions}>
       <Link to="/" >Home</Link>
       <Link to="/about" >About</Link>
     </div>
    </header>
  )
}

export default Navbar;