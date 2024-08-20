
import React, { useRef, useState } from "react";
import  "./Navbar.css";
import line from "../../assets/olabg.png";
import xmenu from "../../assets/xcon.png";

const Navbar = () => {

    const [menu,setMenu] = useState("home")
    const menuRef = useRef ();

    const openMenu = () => {
        menuRef.current.style.right ="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right ="-350px";
    }

    return(
        <div className="navbar">
            <h3>Moses Ouma</h3>
            <img src= {xmenu} onClick={openMenu} alt="" className="nav-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src= {xmenu} onClick={closeMenu} alt="" className="nav-close" />
                <li><a href="#home"><p onClick ={ () => setMenu ("home") }>Home</p></a>{menu === "home" ? <img src= {line} alt=""/>: <></>}</li>
                <li><a href="#about"><p onClick ={ () => setMenu ("about") }>About me</p></a>{menu === "about" ? <img src= {line} alt=""/>: <></>}</li>
                <li><a href="#services"><p onClick ={ () => setMenu ("services") }>Services</p></a>{menu === "services"? <img src= {line} alt=""/>: <></>}</li>
                <li><a href="#work"><p onClick ={ () => setMenu ("work") }>Portfolio</p></a>{menu === "work" ? <img src= {line} alt=""/>: <></>}</li>
                <li><a href="#contact"><p onClick ={ () => setMenu ("contact") }>Contact</p></a>{menu === "contact" ? <img src= {line} alt=""/>: <></>}</li>
            </ul>
           <a href="#contact"><div className="nav-connect">Connect with me</div></a> 

        </div>
    )
}
export default Navbar