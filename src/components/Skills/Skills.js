import React from "react";
import "./Skills.css";
import Html from "../../assets/HTML.png";
import Css from "../../assets/CSS.png"
import Js from "../../assets/Js.png";
import Reactt from "../../assets/React.png"
import Tailwind from "../../assets/Tailwind.png"
import Asp from "../../assets/ASP.png";
import SQL from "../../assets/SQL.png";
import Csharp from "../../assets/CSharp.png"
import Python from "../../assets/Python.png"
import NodeJs from  "../../assets/Node_Js.png"



const Skills = () => {
  return (
    <div className="container">
      <h2 className="skillsTitle">Skills</h2>

      <div className="cards ">
        <div className="card">
          <div className="box htmlBox">
              <img className="cardImage Html" src={Html} alt="sd" />
              <span className="cardText">95%</span>
            
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={Css} alt="sd" />
              <span className="cardText">92%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={Js} alt="sd" />
              <span className="cardText">90%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={Reactt} alt="sd" />
              <span className="cardText">90%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage Tailwind" src={Tailwind} alt="sd" />
              <span className="cardText">95%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
           
              <img className="cardImage Asp" src={Asp} alt="sd" />
              <span className="cardText">85%</span>
           
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={SQL} alt="sd" />
              <span className="cardText">85%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={Csharp} alt="sd" />
              <span className="cardText">82%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={Python} alt="sd" />
              <span className="cardText">90%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <img className="cardImage" src={NodeJs} alt="sd" />
              <span className="cardText">82%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
