import React from 'react'
import Header from './Header'

export default function MasterLayout(prop) {
    return (
        <div className="main-container">
            <Header />
            <div className="right-col ">
                <div className="rotate-90">First Surfing Magazine</div>
                <div className="social-link">
                    <a className="icon icon-twitter"></a>
                    <a className="icon icon-vimeo"></a>
                    <a className="icon icon-tumblr"></a>
                </div>
            </div>

            {prop.children}
        </div>
    )
}
