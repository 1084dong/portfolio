import React from 'react';

function Skill(props) {
    return (
        <div className="common-background">
            <div className="common-content d-flex-column">
                <h1>Resume</h1>
                <div className="d-flex-row justify-content-around">
                    <div className="skill-edu">
                        <h2>Education .1</h2>
                        <div className="edu-year1">
                            <h4>2017</h4>
                            <h3>광주대학교 입학</h3>
                            <p>광주대학교 융합소프트웨어학과에 <br/> 진학</p>
                        </div>
                        <div className="edu-year1">
                            <h4>2018</h4>
                            <h3>군 입대</h3>
                            <p>제 50사단 122연대 3대대로 <br/> 입대</p>
                        </div>
                        <div className="edu-year1">
                            <h4>2019</h4>
                            <h3>군 전역</h3>
                            <p>2019년 11월 29일 군 만기 전역</p>
                        </div>
                    </div>

                    <div className="skill-edu">
                        <h2>Education .2</h2>
                        <div className="edu-year1">
                            <h4>2020</h4>
                            <h3>대학 2학년 복학</h3>
                            <p>2학년으로 복학후<br/>Java 기초역량 강화 프로그램을 이수<br/>네트워크관리사2급, 객체지향개발자2급 취득</p>
                        </div>
                        <div className="edu-year1">
                            <h4>2021</h4>
                            <h3>대학 3학년</h3>
                            <p>스마트그리드 기반 SW 기본역량 강화, <br/>실무역량 강화 교육과정 이수<br/>스마트웹퍼블리셔2급, 객체지향개발자1급 취득</p>
                        </div>
                        <div className="edu-year1">
                            <h4>2022</h4>
                            <h3>대학 4학년</h3>
                            <p>인공지능 온라인코딩스터디 이수<br/>스마트웹퍼블리셔(HTML,CSS) 교육과정 이수 <br/>스마트웹퍼블리셔1급, 데이터베이스관리사2급 취득<br/>정보처리기사 필기 합격</p>
                        </div>
                    </div>

                    <div className="coding-skill">
                        <h2>Coding Skills</h2>

                        <h4>HTML</h4>
                        <div className="graph">
                            <span className="html"></span>
                        </div>

                        <h4>CSS</h4>
                        <div className="graph">
                            <span className="css"></span>
                        </div>

                        <h4>React</h4>
                        <div className="graph">
                            <span className="react"></span>
                        </div>

                        <h4>Python</h4>
                        <div className="graph">
                            <span className="python"></span>
                        </div>

                        <h4>Java</h4>
                        <div className="graph">
                            <span className="java"></span>
                        </div>

                        <h4>SQL</h4>
                        <div className="graph">
                            <span className="sql"></span>
                        </div>


                        <h4>C</h4>
                        <div className="graph">
                            <span className="c"></span>
                        </div>

                        <h4>Database</h4>
                        <div className="graph">
                            <span className="database"></span>
                        </div>

                        <h4>PHP</h4>
                        <div className="graph">
                            <span className="php"></span>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;