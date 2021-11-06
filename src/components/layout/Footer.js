import React from 'react'
import logo from '../../assets/images/Logo.png'

function Footer() {
    return (
        <footer>
            <div>
                <img className="logo" src={logo} />
            </div>
            <nav>
                <a href="#">STORIES</a>
                <a href="#">EVENTS</a>
                <a href="#">PLACES</a>
                <a href="#">BOARDS</a>
            </nav>
            <div className="social-link">
                <a className="icon icon-twitter"></a>
                <a className="icon icon-vimeo"></a>
                <a className="icon icon-tumblr"></a>
            </div>
        </footer>
    )
}

export default Footer
