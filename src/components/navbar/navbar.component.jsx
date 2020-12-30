import React from 'react';
import {withRouter} from "react-router-dom";
import extractName from '../../utilities/website-name.js'
import './navbar.styles.css';

function Navbar(props) {
    const website = extractName(props.location.pathname==='/'?"homepage":props.location.pathname)

    return (
        <div className="navbar" >
            <div className="navbar-branding" >
                <p className="navbar-title">Feedback</p>
                <p className="navbar-subtitle">•&nbsp;{website}</p>
            </div>
        </div>
    )
}

export default withRouter(Navbar);