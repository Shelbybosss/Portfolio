import React from "react";
import github from '../assets/github (1).png';
import linkedin from '../assets/linkedin.png';
import fullstackdeveloper from '../assets/coding-website.png'

function Hero () {

    



    return(
        <div className="hero-main">
            <div className="hero-left">
                <div className="hero-left-inner">
                    <div className="hero-left-inner-left">
                        <img src={fullstackdeveloper} alt="computer"></img>
                    </div>
                    <div className="hero-left-inner-right">
                        <p>Hello, I am Suhas Magar<br></br>
                        I am a Full-Stack Developer<br/>
                        </p>
                        <a  target="_blank"href="https://drive.google.com/file/d/187PVH3lhV7L3C8Pvb_GOIevj7xhAdvb6/view?usp=drive_link"><button className="button">Download Resume</button></a>
                    </div>

                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-inner">
                        <a href="https://www.linkedin.com/in/suhasmagar/" target="_blank"><img src={linkedin} alt="Linkedin"></img></a>
                        <a href="https://github.com/Shelbybosss" target="_blank"><img src={github} alt="Github"></img></a>

                </div>
            </div>
        </div>
    );
}

export default Hero