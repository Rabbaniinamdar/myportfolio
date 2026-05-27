import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from 'react-icons/io';
import blob from '../images/blob.svg';
import resume from '../images/MahammadRabbani.pdf';
import rabbani from '../images/rabbani-removebg-preview.png';
import '../App.css';
import '../CSS/Header.css';

const Header = () => {
    return (
        <div>
            <header id="menu-toggle">
                <div class="image-container">
                    <img src={blob} alt='' width={350} />
                    <img className="overlap-image" src={rabbani} alt='' />
                </div>
                <div className="social">
                    <a href='#contact'> <button id='ctn_btn'>Hire Me</button></a>
                    <nav className="navbar">
                        <div className="grid-container">
                            <div className="item1">
                                <a target="_blank" rel="noopener noreferrer" href="mailto:mdrabbani8229@gmail.com">
                                    <IoMdMail style={{ color: "#171515 " }} />
                                </a>
                            </div>
                            <div className="item2">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohammed-rabbani-071168190">
                                    <FaLinkedin style={{ color: "#171515 " }} />
                                </a>
                            </div>
                            <div className="item3">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rabbaniinamdar">
                                    <FaGithub style={{ color: '#171515' }} />
                                </a>
                            </div>
                            <div className="item4">
                                <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/mahammedrabbani822931/">
                                    <SiLeetcode style={{ color: "#171515" }} />
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="resume">
                        <a href={resume} target="_blank" rel="noreferrer">
                            <button className="btn">
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;