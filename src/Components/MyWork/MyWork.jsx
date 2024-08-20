

import React from "react";
import "./MyWork.css";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work from "../../assets/work.jpg";
import job from "../../assets/job.jpg";


const MyWork = () => {
    return(
        <div id="work" className="mywork">
            <h1>My Latest Work</h1>
            <div className="mywork-container">
               <a href="https://mosesouma.vercel.app/"><img src={work1} alt="" /></a> 
                <a href="https://carsit.vercel.app/"><img src={work2} alt="" /></a>
                <a href="https://mkuru.vercel.app/"><img src={work3} alt="" /></a>
                <a href="https://tempeconverter.vercel.app/"><img src={work} alt="" /></a>
                <a href="https://mosesouma.vercel.app/"><img src={work2} alt="" /></a>
                <a href="https://agecalc-delta.vercel.app/"><img src={job} alt="" /></a>
            </div>
            <a href="https://github.com/settings/repositories"><div className="show">Show More</div></a>

        </div>
    )
}
export default MyWork