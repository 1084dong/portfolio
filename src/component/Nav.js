import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav-btns'>
            <ul className='ul'>
                <Link to="/" className='link'>
                    <li>
                        <img src="icons/home_btn.png"/>
                    </li>
                </Link>

                <Link className='link' to="/about">
                    <li>
                        <img src="icons/home_btn.png"/>
                    </li>
                </Link>

                <Link className='link' to="/skill">
                    <li>
                        <img src="icons/home_btn.png"/>
                    </li>
                </Link>

                <Link className='link' to="/experience">
                    <li>
                        <img src="icons/home_btn.png"/>
                    </li>
                </Link>

                <Link className='link' to="/contact">
                    <li>
                        <img src="icons/home_btn.png"/>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;