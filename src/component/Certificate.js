import React from 'react';
import {Link} from "react-router-dom";

function Certificate(props) {
    return (
        <div className="common-background">
            <div className="common-content">
                <h1>Certificate</h1>

                <div className="certificate-content1 d-flex-row justify-content-around">
                        <img src="icons/네트워크관리사2급.jpg"/>
                        <img src="icons/스마트웹퍼블리셔1급.jpg"/>
                        <img src="icons/스마트웹퍼블리셔2급.jpg"/>
                </div>

                <div className="certificate-content2 d-flex-row justify-content-around">
                        <img src="icons/데이터베이스관리사2급.jpg"/>
                        <img src="icons/객체지향개발자1급.jpg"/>
                        <img src="icons/객체지향개발자2급.jpg"/>
                </div>

            </div>
        </div>
    );
}

export default Certificate;
// https://github.com/1084dong