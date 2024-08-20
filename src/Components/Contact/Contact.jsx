

import React from "react";
import  "./Contact.css";
import techguy from "../../assets/techguy.jpg";



const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "db5d1a98-8910-487a-bd4b-04cd1ba34e72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div id="contact" className="contact">
            <div className="tittle">
            <h1>Get Intouch</h1>
            </div>
            
                
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take new projects, am also looking for an internship. <br/> So feel free to 
                        contact me anytime for intern or any projects 
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p>mosesroman681@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p>+254-740-147-346</p>
                        </div>
                        <div className="contact-detail">
                            <p>Nairobi Kenya</p>
                        </div>
                        <img src={techguy} alt="" />
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Phone Number</label>
                    <input type="" placeholder="+254-123-456-789" name="number"/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows={8} placeholder="enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact