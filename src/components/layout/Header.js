import React from 'react'
import logo from '../../assets/images/Logo.png'

export default function Header() {
    return (
        <header className="row">

            <div className="col-sm-offset-1 col-sm-1">
                <img className="logo" src={logo} />
            </div>
            <nav className="col-sm-6">
                <a href="#">STORIES</a>
                <a href="#">EVENTS</a>
                <a href="#">PLACES</a>
                <a href="#">BOARDS</a>
            </nav>

        </header>
    )
}
