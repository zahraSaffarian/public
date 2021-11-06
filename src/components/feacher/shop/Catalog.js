import React from 'react'

function Catalog({ item }) {
    return (

        <div className="item-container">

            <div className="img-container"><img src={item.img} /></div>

            <div className="info">
                <div>
                    <div className="brand">{item.brand}</div>
                    <div className="name">{item.name}</div>
                    <div className="price">${item.price}</div>
                    <div className="uppercase">buy</div>
                </div>
            </div>


        </div>


    )
}

export default Catalog
