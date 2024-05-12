import React, { useState, useEffect } from "react";
import github from '../assets/github (1).png';
import linkedin from '../assets/linkedin.png';
import fullstackdeveloper from '../assets/coding-website.png';

function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const originalText = "Full-Stack Developer";
        const typingEffect = setInterval(() => {
            setText(originalText.substring(0, index + 1));
            setIndex((prevIndex) =>
                prevIndex === originalText.length ? 0 : prevIndex + 1
            );
        }, 100); 

        if (index === originalText.length) {
            clearInterval(typingEffect);
            setTimeout(() => {
                setIndex(0);
            }, 2000);
        }

        return () => clearInterval(typingEffect);
    }, [index]);

    return (
        <div className="hero-main">
            <div className="hero-left">
                <div className="hero-left-inner">
                    <div className="hero-left-inner-left">
                        <img src={fullstackdeveloper} alt="computer" />
                    </div>
                    <div className="hero-left-inner-right">
                        <p>Hello, I am Suhas Magar,<br /></p>
                        <p>A {text}</p><br />
                
                        <a target="_blank" href="https://drive.google.com/file/d/187PVH3lhV7L3C8Pvb_GOIevj7xhAdvb6/view?usp=drive_link"><button className="button">View Resume</button></a>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-inner">
                    <a href="https://www.linkedin.com/in/suhasmagar/" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/Shelbybosss" target="_blank"><img src={github} alt="Github" /></a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
