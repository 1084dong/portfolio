import React from 'react';
import {Link} from "react-router-dom";

function Completion7(props) {
    return (
        <div className="common-background">
            <div className="common-content" style={{textAlign:"center"}}>

                <Link className="goback" to="/Experience"> ◁ </Link>
                <Link className="gohome" to="/"> X </Link>

                <h2 style={{color:"#EDEDED"}}>Completion 7</h2>

                <div className="completion1-content justify-content-around">
                    <div className="completion1-content-left">
                        <img src="icons/캡스톤_큰.png"/>
                    </div>
                    <div className="completion1-content-right">
                        <h2>캡스톤디자인 TTS를 활용한 파일리딩프로그램</h2>
                        <p>2022년 1학기 캡스톤디자인 TTS 기술을 활용하여</p>
                        <p>파일 리딩 프로그램을 만드는 프로젝트의 전체적인</p>
                        <p>레이아웃을 담당하였습니다.</p>
                        <a className="complete-a" href="https://github.com/1084dong/2022_1_capstone" target="_blank">Go GitHub!</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Completion7;