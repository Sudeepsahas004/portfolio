import "./intro.css";
import React from "react";
import profile from "../../assets/Profile.png";
import hireImg from "../../assets/Hire me.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
  
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Sudeep Sahas</span>
            <br />
            Website Designer
          </span>
          <span className="introPara">
            A passionate Web Developer who loves building modern, and
            <br />
            responsive websites, creating smooth user experiences.
          </span>
          <Link to="contact"
        smooth={true}
        offset={-80}
        duration={100} className="hireBtn">
            <button className="btn">
              <img src={hireImg} className="hire" alt="" />
              <span className="hireMe">Hire Me</span>
            </button>
          </Link>
        </div>
     
          <img src={profile} alt="Profile" className="bg" />
        
   
    </section>
  );
};

export default Intro;
