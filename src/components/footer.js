import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const footer = () => {
    return(
        <div className='footer'>
            <h3>These are what am i using so far .</h3>
            <ul>
                <li><a href="https://id.wikipedia.org/wiki/HTML"><FaHtml5 /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/CSS"><FaCss3Alt /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/JavaScript"><FaJs /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"><FaBootstrap /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"><FaReact /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Node.js"><FaNodeJs /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Git"><FaGit /></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Npm_(software)"><FaNpm /></a></li>
            </ul>
            <br />
            <p>Copyright &copy; 2022 <br />made by @syamsunuryaman</p>
        </div>
        
    )
}

export default footer;