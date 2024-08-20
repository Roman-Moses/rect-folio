

import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Moses Ouma</h1>
                    <p>I am a front end developer based in Nairobi Kenya, with 10 months of experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email"  placeholder="Enter your Email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="bottom-left">2024 Moses Ouma. All  rights reserved</p>
                <div className="bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms policy</p>
                    <p>Conect with me </p>
                </div>
            </div>


        </div>
    )
}

export default Footer