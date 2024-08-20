import React from "react";
import "./About.css";
import daddy from "../../assets/roman2.jpg";

const About = () =>{
    return(
        <div id="about" className="about">
            <div className="about-tittle">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={daddy} alt="" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hey there! I'm Moses, a passionate front-end developer with a knack for creating dynamic and engaging web experiences.
                            At 23 years old, I've already immersed myself in the world of web development,
                             honing my skills in HTML,React Js, CSS, and JavaScript.
                              My journey has been driven by a deep love for design and a keen eye for detail,
                             which helps me bring visually stunning and highly functional websites to life.</p>
                        <p>Whether I'm working on a personal project or collaborating with a team,
                             I thrive on finding innovative solutions to complex problems and staying up-to-date with the latest industry trends.
                              I believe in the power of clean code and user-centered design to make a real impact in the digital space.
                               When I'm not coding, you'll find me exploring new technologies, 
                            contributing to open-source projects, or diving into the latest web design trends.</p>
                            <p>Let's connect and create something amazing together! and learn new skills together </p>
                            

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"75%"}}/> </div>
                        <div className="about-skill"><p>React</p> <hr style={{width:"50%"}}/> </div>
                        <div className="about-skill"><p>Bootstrap</p> <hr style={{width:"60%"}}/> </div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"30%"}}/> </div>
                        <div className="about-skill"><p>Tailwind Css</p> <hr style={{width:"40%"}}/> </div>
                    </div>
                    </div>
                </div>
                <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>months of experience</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>20+</h1>
                            <p>projects complited</p>
                        </div>
                        <hr />
                        
                        <div className="about-achievement">
                            <h1>2+</h1>
                            <p>Happy Clients</p>
                        </div>
                        <hr />
            </div>

        </div>
    )
}
export default About