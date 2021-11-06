import React from 'react'
import img from '../../assets/images/f.png'
function Contacts() {
    return (
        <section className="contacts-section" >


            <div className="contacts-container row">

                <div className="img-container col-xs-12 col-sm-6">
                    <img width="100%" src={img} />
                </div>
                <div className="contacts-text col-xs-12 col-sm-6">
                    <div className="uppercase">Our Camp</div>

                    <div className="header">
                        <div className="sub-header ">
                            CA 91932, USA<br />
                            Imperial Beach<br />
                            560 Silver Strand Blvd

                        </div>
                    </div>

                    <div className="link-container">
                        <a className="uppercase link">Get in TouchRead More</a>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Contacts
