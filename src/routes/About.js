import React from "react";
import { useLocation } from "react-router-dom";
import './About.css';

function About() {
    const location = useLocation();
    console.log(location.state)
    return (
         <><div className='about__container'></div><span>
            "Freedom is the freedom to say that two plus two make four.
            If that is granted, all else follows."
        </span><span>- George Orwell, 1984</span></>
    );
   
}

export default About;