import React from 'react';
import {Link} from "react-router-dom";

function Completion8(props) {
    return (
        <div className="common-background">
            <div className="common-content" style={{textAlign:"center"}}>

                <Link className="goback" to="/Experience"> ◁ </Link>
                <Link className="gohome" to="/"> X </Link>

                <h2 style={{color:"#EDEDED"}}>Completion 8</h2>

                <div className="completion1-content justify-content-around">
                    <div className="completion1-content-left">
                        <img src="icons/포폴_큰.png"/>
                    </div>
                    <div className="completion1-content-right">
                        <h2 className="complete-h2">포트폴리오</h2>
                        <p>node.js 와 React 를 활용해 포트폴리오를</p>
                        <p>만들어 봤습니다. 만들면서 스스로 공부도 되었고</p>
                        <p>마크업 실력 향상에도 도움이 되었습니다.</p>
                        <a className="complete-a" href="https://github.com/1084dong/portfolio" target="_blank">Go GitHub!</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Completion8;