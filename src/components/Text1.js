import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DisabledExample() {
    return (
        <div className='text-box'>
            <h3>About</h3>
            <p>Hi mates, my name is Syamsu and living in Bandung Indonesia, I am web developer who is focusing at
                client-side sector, I mostly code using HTML, CSS, Javascript, Bootstrap, React.JS, Node.JS, and also GIT
                I knew that those aren't gonna be enough for being the profesional developer yet, however
                I believe that small step that i do as the habit is better for achieving something. Just remmeber that you have to <b><em> Never Stop Before
                Being The Champion.</em></b>
            </p>
            <br />
            <ul>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">syamsu7</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaGithub /></li>
                    </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">@syamsunuryaman</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaInstagram /></li>
                    </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">0881023001546</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaWhatsapp /></li>
                    </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">muhamadsyamsu6@gmail.com</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaRegEnvelope /></li>
                    </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CodeWithSyam</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaYoutube /></li>
                    </span>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">@SyamsuNuryaman</Tooltip>}>
                    <span className="d-inline-block">
                        <li><FaTelegramPlane /></li>
                    </span>
                </OverlayTrigger>
            </ul>
        </div >
    );
}

export default DisabledExample;