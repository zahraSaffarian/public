import React from 'react'

function Subscribe() {
    return (
        <section className="subscribe-section">
            <div className="subscribe-container">
                <div className="vertical-line"></div>
                <div className="sub-header">Join the Club</div>
                <div className="text-light">By better understanding the various aspects of surfing, you will improve faster
                    and have more fun in the water.</div>
                <div className="input-container">
                    <input type="email" placeholder="Your E-mail" />
                    <button className="icon-chevron-right btn"></button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
