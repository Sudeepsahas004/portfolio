import logo from "../../assets/SS_logo.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";
import hamburg from "../../assets/hamburg.svg";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);   // Close mobile menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="Logo" width="150px" />
      <div className="desktopMenu">
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-200}
          duration={100}
          className="desktopMenuListItem navItem"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={100}
          className="desktopMenuListItem navItem"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="desktopMenuListItem navItem"
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="desktopMenuListItem navItem"
        >
          Projects
        </Link>
      </div>

 <Link
        to="contact"
        smooth={true}
        offset={-80}
        duration={100}
        
      >
      
      <button className="desktopMenuBtn">
        <img src={contact} alt="contact" className="desktopMenuImg" />
        <p className="contact">Contact Me </p>
      </button>
      </Link>

      {/* Hamburger Icon */}
      <img
        src={hamburg}
        className="hamburgerIcon"
        alt="menu"
        onClick={() => setOpen(!open)}
      />

      {/* Mobile Menu */}
      <div className={open ? "mobileMenu active" : "mobileMenu"}>
        <span onClick={()=>setOpen(false)} className="closeButton">X</span>
        <Link to="intro"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500} 
          className="navItem mobileNavItem"
           onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link  to="about"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500} 
          className="navItem mobileNavItem"
          onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navItem mobileNavItem" onClick={() => setOpen(false)}>
          Skills
        </Link>
        
        <Link to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          className="navItem mobileNavItem"
           onClick={() => setOpen(false)}>
            
          Projects
          
        </Link>

             
       <Link
        to="contact"
        smooth={true}
        offset={-60}
        duration={300}
       
      >
        <button className="mobileContactBtn" onClick={() => setOpen(false)}>
          <img src={contact} alt="contact" className="mobileContactImg" />
          <span className="mobileContact"> Contact Me</span>
        </button>
        </Link>
    
      </div>
    </nav>
  );
};
export default Navbar;
