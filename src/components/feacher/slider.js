
import React, { useState } from 'react';
import img1 from '../../assets/images/slider/1.png'
import img2 from '../../assets/images/slider/2.jfif'
import img3 from '../../assets/images/slider/3.jfif'
import img4 from '../../assets/images/slider/4.png'
import img5 from '../../assets/images/slider/5.jpg'

function Slider() {
    const imgList = [{ id: 1, src: img1 }, { id: 2, src: img2 },
    { id: 3, src: img3 }, { id: 4, src: img4 }, { id: 5, src: img5 }]
    const [isShowId, setIsShowId] = useState(1);

    const increase = () => {
        setIsShowId((prev) => prev + 1);

    };
    const reduce = () => {
        setIsShowId((prev) => prev - 1);

    }
    return (
        <section className="slider-container row">
            <div className="col-sm-offset-1 col-xs-1">
                <div className="slider-left-container ">
                    <div></div>
                    <div class="text-container ">
                        <div className="brand-color uppercase f-LeagueSpartan">YOUR</div>
                        <b className="caption f-MyriadPro">
                            Beautiful Escape
                        </b>
                        <div className="text-light f-Poppins">
                            One of the greatest things about the sport of surfing is that you need only three things: your body,
                            a surfboard, and a wave.
                        </div>
                    </div>
                    <div className="slider-contlor">
                        <button onClick={reduce} disabled={isShowId === 1} className="btn-icon icon-chevron-left"></button>
                        <span className="brand-color"> {isShowId}</span> /  {imgList.length}
                        <button disabled={isShowId === imgList.length} onClick={increase} className="btn-icon icon-chevron-right"></button>
                    </div>
                </div>

            </div>

            <div className="col-sm-9 col-xs-11">
                <div className="slider-imge-container">
                    {imgList.map(item => (
                        <img id={`id-${item.id}`}
                            className={item.id < isShowId ? 'left' : item.id > isShowId ? 'right' : 'show'}
                            key={item.id} height="100%" src={item.src} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Slider
