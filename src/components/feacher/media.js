
import img1 from '../../assets/images/media/1.png'
import img2 from '../../assets/images/media/2.png'


function Media() {
    const playlist = [{
        file: 'https://link-to-my-video.mp4',
        image: 'https://link-to-my-poster.jpg',
        tracks: [{
            file: 'https://link-to-subtitles.vtt',
            label: 'English',
            kind: 'captions',
            'default': true
        }],
    },
    {
        file: 'https://link-to-my-other-video.mp4',
        image: 'https://link-to-my-other-poster.jpg',
    }];
    return (
        <section className="media-container row">
            <div className="col-sm-offset-1 col-xs-10">
                <div className="col-xs-6">
                    <img width="100%" src={img2} />
                    <div className="text-container">
                        <div className="text-light">
                            By better understanding the various aspects of surfing,
                            you will improve faster and have more fun in the water.
                            <br />
                            <a className="uppercase link">read more</a>
                        </div>

                    </div>

                </div>
                <div className="col-xs-6 video-container" >
                    <div className="video">
                        <img width="100%" src={img1} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Media;
