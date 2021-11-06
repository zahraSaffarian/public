import React from 'react'
import img1 from '../../assets/images/article/1.png'
import img2 from '../../assets/images/article/2.png'
function Article() {
    return (
        <section className="article-section" >
            <div className="row">
                <div className="col-xs-12 col-sm-offset-1 col-sm-10">
                    <div className="article-container article-1">
                        <div className="article-text">
                            <div className="header">
                                <div className="shadow">01</div>
                                <div className="sub-header ">
                                    Surf Training
                                </div>
                            </div>
                            <div className="text-light">
                                By better understanding the various aspects of surfing,
                                By better understanding the various aspects of surfing,
                                you will improve faster and have more fun in the water.
                            </div>
                            <div className="link-container">
                                <a className="uppercase link">Read More</a>
                            </div>
                        </div>
                        <div className="img-container img-1">
                            <img src={img1} />
                            <div className="rotate-90">
                                Surf Camps
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-offset-2 col-sm-9">
                    <div className="article-container article-2 ">
                        <div className="img-container img-2">
                            <img src={img2} />
                            <div className="rotate-90">
                                Surf Camps
                            </div>
                        </div>
                        <div className="article-text">
                            <div className="header">
                                <div className="shadow">02</div>
                                <div className="sub-header ">
                                    Point Break
                                </div>
                            </div>
                            <div className="text-light">
                                By better understanding the various aspects of By better understanding
                                the various aspects of surfing, By better understanding the various aspects
                                of surfing,
                                you will improve faster and have more fun in the water.


                            </div>
                            <div className="link-container">
                                <a className="uppercase link">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article
