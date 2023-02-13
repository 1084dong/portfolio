import React from 'react';

function Contact(props) {
    return (
        <div className="common-background">
            <div className="common-content">
                <h1>Contact</h1>
                <div>
                    <ul className="contact d-flex-row justify-content-around" style={{listStyle:"none"}}>
                        <li>
                            <div className="d-flex-row">
                                <img src="icons/contact_location.png"/>
                                <h2>Address</h2>
                            </div>
                            <p>광주광역시 남구 진월동</p>
                        </li>

                        <li>
                            <div className="d-flex-row">
                                <img src="icons/contact_mail.png"/>
                                <h2>E-mail</h2>
                            </div>
                            <p>1084dong @ gmail.com</p>
                            <p style={{margin:0}}>(OR)</p>
                            <p style={{margin:0}}>1084dong @ naver.com</p>
                        </li>

                        <li>
                            <div className="d-flex-row">
                                <img src="icons/contact_call.png"/>
                                <h2>Cell-Phone</h2>
                            </div>
                            <p>010 - 2628 - 1084</p>
                        </li>



                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Contact;
// https://github.com/1084dong