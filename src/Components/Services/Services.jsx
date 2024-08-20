
import React from "react";
import "./Services.css";

const Services = () => {
    return(
        <div id="services" className="services">
            <h1>My Services</h1>
            <div className="service-container">
                <div className="services-format">
                    <h2>01</h2>
                    <h3>Web design</h3>
                    <p>I build a responsive web pages with dynamic pages which are with currents trend</p>
                    <div className="read-more">Read More</div>
                </div>
                <div className="services-format">
                    <h2>02</h2>
                    <h3>Graphic Design</h3>
                    <p>I have also skills on software of designing like adobe photoshop, Adobe illustrator,
                         which help me to create interactive logos, brontures, business card and even posters</p>
                         <div className="read-more">Read More</div>
                </div>
                <div className="services-format">
                    <h2>03</h2>
                    <h3>Digital Marketing</h3>
                    <p>I have learnt digital marketing in certificate level throuhg absa  due to skills learnt from absa am able
                         to showcase the product so that it can reach a wide range of customer </p>
                         <div className="read-more">Read More</div>
                </div>
                <div className="services-format">
                    <h2>04</h2>
                    <h3>Data Analysis</h3>
                    <p>I can do data analysis using excel spread shit, i can  record data and alaso interprate the data using excels </p>
                    <div className="read-more">Read More</div>
                </div>

            </div>
        
        </div>
    )
}

export default Services