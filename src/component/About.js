import React from 'react';

function About(props) {
    return (
        <div className="common-background">
            <div className="common-content d-flex-column">
                <h1>About Me</h1>
                <div id="col-1" className="d-flex-row justify-content-around">
                    <div className="about-1">
                        <img className="mypicture" src="/icons/hdj.jpg"/>
                    </div>
                    <div className="about-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, placeat.
                    </div>
                    <div className="about-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, exercitationem.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;