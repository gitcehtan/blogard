import React from 'react'
import css from "./Footer.module.css";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={css.footer}>
       <div className={css["footer-logo"]}>
       <div className={css.logo}>
        Logo
       </div>
       <p>Welcome on board with Blogard, your ultimate platform for cross-border real blog! Blogard is your go-to hub for discovering, reading, and blogging in global areas, all in one place. With Blogard, blogging in all areas worldwide has never been easier.</p>

       <div className={css.social}>
         <div className={css["icon-container"]}>
           <FaLinkedinIn size={25} className={css.icon} />
         </div>
         
         <div className={css["icon-container"]}>
           <FaInstagram size={25} className={css.icon}/>
         </div>

         <div className={css["icon-container"]}>           
            <FaTwitter size={25} className={css.icon}/>
         </div>

         <div className={css["icon-container"]}>
           <FaYoutube size={25} className={css.icon}/>
         </div>

        
       </div>
       </div>
       <div className={`${css["footer-col"]} ${css.col2}`}>
        <h1 className={css['col-heading']}>Quick Access</h1>
        <Link to='/'>Blogs</Link>
        <Link to='/about'>About Us</Link>
       </div>
       <div className={css["footer-col"]}>
          <h1 className={css['col-heading']}>Contact Us</h1>
          <div className={css.location}>
            <MdLocationOn size={30}/> 
            <p>Astrick Tower Office No. 1230 and 1356, Sector 12, Gurugram, India.</p>
          </div>
          <div className={css.email}>
            <MdEmail size={20}/> <p>contact@blogard.com</p>
          </div>
          <div className={css.phone}>
            <FaPhone style={{ transform: "scaleX(-1)" }} />
            <p>+91-9738495738</p>
          </div>
       </div>
       <p className={css.separator}></p>
       <div className={css["footer-end"]}>
         <div className={css["privacy-policy"]}>
          <Link to="/">Terms and Condtions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookies Policy</Link>
         </div>
         <p className={css.copyright}>2024 &copy; All right reserved by Blogard.</p>
       </div>

    </footer>
  )
}

export default Footer