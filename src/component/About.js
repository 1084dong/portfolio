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
                        <p><p className="about-2-title">호기심 많고 기록 하는것을 좋아하는 신입 개발자 황동재입니다.</p> <br/>프론트엔드 개발자를 희망하고 있습니다.<br/>배우는 것을 좋아하고 새로운 도전에 대한 두려움이 없습니다.
                            배운 것은 항상 기록하는 것 또한 좋아합니다.<br/><br/>기록의 중요성을 알기에 항상 실천하려고 노력합니다. </p>

                    </div>
                    <div className="about-3">
                        <ul>
                            <li className="d-flex-row"><p className="p-title">Age</p><p className="p-value">&nbsp;: 26</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Residence</p><p className="p-value">&nbsp;: 대한민국</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Address</p><p className="p-value">&nbsp;: 광주광역시 남구 효덕로300번길8</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">E-mail</p><p className="p-value">&nbsp;: 1084dong@gmail.com</p></li><br/>
                            <li className="d-flex-row"><p className="p-title">Phone</p><p className="p-value">&nbsp;: 010-2628-1084</p></li><br/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;