import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav-btns'>
            <div className="profile">
                <img src="icons/증명사진_이력서.jpg"/>
                <p>HDJ</p>
            </div>

            <ul className='ul'>
                <Link to="/" className='link' style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/home.png"/>
                        <p className="btn-text">Home</p>
                    </li>
                </Link>

                <Link className='link' to="/about" style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/aboutme.png"/>
                        <p className="btn-text">About Me</p>
                    </li>
                </Link>

                <Link className='link' to="/skill" style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/skill.png"/>
                        <p className="btn-text">Resume</p>
                    </li>
                </Link>

                <Link className='link' to="/experience" style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/experience.png"/>
                        <p className="btn-text">Experience</p>
                    </li>
                </Link>

                <Link className='link certificate-img' to="/certificate" style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/certificate.png"/>
                        <p className="btn-text">Certificate</p>
                    </li>
                </Link>

                <Link className='link contact-img' to="/contact" style={{textDecoration:'none'}}>
                    <li>
                        <img src="icons/contact.png"/>
                        <p className="btn-text">Contact</p>
                    </li>
                </Link>

            </ul>
        </div>
    );
}

export default Nav;