import React from 'react';
import { Link } from 'react-router-dom';

function Experience(props) {
    return (
        <div className="common-background">
            <div className="common-content">
                <h1>Experience</h1>

                <div className="Experience-content d-flex-row justify-content-around">
                    <Link className="experience-link" to="/completion1" style={{textDecoration:'none'}}>
                        <img src="icons/수료증1.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion2" style={{textDecoration:'none'}}>
                        <img src="icons/수료증2.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion3" style={{textDecoration:'none'}}>
                        <img src="icons/수료증3.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion4" style={{textDecoration:'none'}}>
                        <img src="icons/수료증4.png"/>
                    </Link>
                </div>

                <div className="Experience-content2 d-flex-row justify-content-around">

                    <Link className="experience-link" to="/completion5" style={{textDecoration:'none'}}>
                        <img src="icons/수료증5.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion6" style={{textDecoration:'none'}}>
                        <img src="icons/수료증6.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion7" style={{textDecoration:'none'}}>
                        <img src="icons/캡스톤.png"/>
                    </Link>
                    <Link className="experience-link" to="/completion5" style={{textDecoration:'none'}}>
                        <img src="icons/포폴.png"/>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Experience;
