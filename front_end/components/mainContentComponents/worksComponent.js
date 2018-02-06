import React from 'react';

export default class WorksComponent extends React.Component{
    render(){
        return(
            <div className="works-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                <h2 className="animated entrance">our works</h2>
                <p className="works-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim veniam.
                                </p>

                {/* <!-- works gallery --> */}
                <div className="works-gallery col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                    {/* <!-- next work --> */}
                    <a className="next-work" href="#">&gt;</a>
                    {/* <!-- end next work --> */}

                    {/* <!-- prev work --> */}
                    <a className="prev-work" href="#">&lt;</a>
                    {/* <!-- end prev work --> */}

                    <div className="owl-carousel">
                        {/* <!-- work 1 --> */}
                        <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <span className="title">Hello Moura</span>
                                <span className="desc">web design</span>

                                <span className="button-container">
                                    <a href="#"><span aria-hidden="true" className="icon icon-link"></span></a>
                                    <a href="http://placehold.it/1200x800" className="popup-image"><span aria-hidden="true" className="icon icon-magnifier"></span></a>
                                </span>
                            </div>
                            <div className="img-wrapper col-lg-7 col-md-7 col-sm-7 col-xs-6">
                                <div className="img-container">
                                    <div className="img-bg">
                                        <img src="http://placehold.it/600x400" alt="img_thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end work 1 --> */}

                        {/* <!-- work 2 --> */}
                        <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <span className="title">Hello Moura</span>
                                <span className="desc">web design</span>

                                <span className="button-container">
                                    <a href="#"><span aria-hidden="true" className="icon icon-link"></span></a>
                                    <a href="http://placehold.it/1200x800" className="popup-image"><span aria-hidden="true" className="icon icon-magnifier"></span></a>
                                </span>
                            </div>
                            <div className="img-wrapper col-lg-7 col-md-7 col-sm-7 col-xs-6">
                                <div className="img-container">
                                    <div className="img-bg">
                                        <img src="http://placehold.it/600x400" alt="img_thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end work 2 --> */}

                        {/* <!-- work 3 --> */}
                        <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <span className="title">Hello Moura</span>
                                <span className="desc">web design</span>

                                <span className="button-container">
                                    <a href="#"><span aria-hidden="true" className="icon icon-link"></span></a>
                                    <a href="http://placehold.it/1200x800" className="popup-image"><span aria-hidden="true" className="icon icon-magnifier"></span></a>
                                </span>
                            </div>
                            <div className="img-wrapper col-lg-7 col-md-7 col-sm-7 col-xs-6">
                                <div className="img-container">
                                    <div className="img-bg">
                                        <img src="http://placehold.it/600x400" alt="img_thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end work 3 --> */}
                    </div>

                </div>
                {/* <!-- end works gallery --> */}
            </div>
        )
    }
}