import React, { useState } from 'react';
import Catalog from './Catalog'
import img1 from '../../../assets/images/shop/1.png'
import img2 from '../../../assets/images/shop/2.png'
import img3 from '../../../assets/images/shop/3.png'

function Shop() {
    const [showLimit, setShowLimit] = useState(0);

    const catalogList = [
        { id: 1, brand: "Funboards", name: "Chilli Rare Bird", price: 890, img: img1 },
        { id: 2, brand: "Surfboards", name: "Emery NEM XF", price: 950, img: img2 },
        { id: 3, brand: "Funboards", name: "Agency GROM", price: 670, img: img3 },
        { id: 4, brand: "Funboards", name: "Emery NEM", price: 720, img: img1 },
    ]
    const increase = () => {
        setShowLimit((prev) => prev + 1);

    };
    const reduce = () => {
        setShowLimit((prev) => prev - 1);

    }
    return (
        <section className="shop-container">
            <div className="section-head">
                <small className="brand-uppercase">shop</small>
                <h2 className="sub-header">
                    Surfboards
                </h2>
                <div className="shop-slider">
                    <div className="slid-btn-container">
                        <button
                            onClick={reduce}
                            disabled={showLimit === 0}
                            className="next slid-btn icon-chevron-left"></button>
                    </div>
                    <div className="catalog-container" >
                        <div className={`catalog-slid-container show-${showLimit}`}>
                            {catalogList.map(x => (
                                <Catalog key={x.id} item={x} />
                            ))}
                        </div>
                    </div>
                    <div className="slid-btn-container">
                        <button
                            onClick={increase}
                            disabled={showLimit === (catalogList.length - 3)}
                            className="prev slid-btn icon-chevron-right"></button>
                    </div>
                </div>
                <div className="show-all">
                    <a className="uppercase link">show all</a>
                </div>
            </div>
        </section>

    )
}



export default Shop
