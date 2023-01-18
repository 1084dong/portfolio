import React from 'react';
import {Link} from "react-router-dom";

function Completion2(props) {
    return (
        <div className="common-background">
            <div className="common-content" style={{textAlign:"center"}}>

                <Link className="goback" to="/Experience"> ◁ </Link>
                <Link className="gohome" to="/"> X </Link>

                <h2 style={{color:"#EDEDED"}}>Completion 2</h2>

                <div className="completion1-content">
                    <div className="completion1-content-left">
                        <img src="/icons/수료증2큼.png"/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Completion2;