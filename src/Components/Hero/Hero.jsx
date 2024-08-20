import React from "react";
import "./Hero.css";
import daddy from "../../assets/kiajana.jpg";



 const Hero = () => {

    
    return(
        <div id="home" className="hero">
            <img src={daddy} alt="" />
            <h1><span>I am Moses Ouma,</span> frontend developer based in Nairobi Kenya. </h1>
            <p>I am frontend developer based in Nairobi Kenya,
                Im proficient in JavaScript, HTML, CSS and React which allows me to bulid a dynamic and responsive web application.
                 I am known in innovative approach to stay updated with latest web development trends.
                 I am eager to learn new skills to stay forefront of web development. 
                 I am looking foward to opportunities  where i can continue
                 growing and contributing to innovative projects.
            </p>
            <div className="hero-action">
                <a href="#contact"><div className="hero-connect">conect with me</div></a>
                <a href="https://docs.google.com/document/d/1LY5Af2GLa9ZvjhB9IujeKsI_tGhnjOCGlxN4ZlwOFk8/edit"><div className="hero-resume">My resume</div></a>
            </div>

        </div>
    );
};
export default Hero