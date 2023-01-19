import React from 'react';

function About(props) {
    return (
        <div className="common-background">
            <div className="common-content d-flex-column">
                <h1>About Me</h1>
                <div id="col-1" className="d-flex-row justify-content-around">
                    <div className="about-1">
                        <img className="mypicture" src="icons/증명사진_이력서.jpg"/>
                    </div>
                    <div className="about-2">
                        <p><p className="about-2-title">호기심 많고 기록을 습관화 하는 신입 개발자 황동재입니다.</p> <br/>프론트엔드 개발자를 희망하고 있습니다.<br/><br/>배우는 것을 좋아하고 새로운 도전에 대한 두려움이 없습니다.
                            <br/><br/>기록의 중요성을 잘 알고 항상 실천 하고 있습니다。<br/><br/>중간에 포기 하지 않고 끝까지 함께 갈 수 있는 개발자가 되겠습니다。</p>

                    </div>
                    <div className="about-3">
                        <ul>
                            <li className="d-flex-row"><p className="p-title">Age</p><p className="p-value">&nbsp;: 26</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Birth</p><p className="p-value">&nbsp;: 1998.09.04</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Address</p><p className="p-value">&nbsp;: 광주광역시 남구 효덕로300번길8</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Mail</p><p className="p-value">&nbsp;: 1084dong@gmail.com</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Phone</p><p className="p-value">&nbsp;: 010-2628-1084</p></li><br/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;