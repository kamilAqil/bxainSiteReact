import React from 'react';
import WhiteSvgComponent from './WhiteSvgComponent';
export default class MainContent extends React.Component{
    render(){
        return (
                <div id="main-content" className="main-content">
                    {/* white svg goes here */}
                        <WhiteSvgComponent />
                    {/* <!-- 8.0 close main content button --> */}
                    <div className="close-content-container animated entrance">
                        <a className="close-content" href="#">X</a>
                    </div>
                    {/* <!-- end close main content button --> */}

                    {/* <!-- 9.0 countdown --> */}
                    <div className="countdown col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="countdown-container centering-xy" id="lwt-countdown">
                            {/* <!-- hours --> */}
                            <div className="dash hours_dash entrance animated">
                                <div className="content">
                                    <div className="digit">0</div><div className="digit">0</div>
                                    <span className="dash_title">hours</span>
                                </div>
                            </div>
                            {/* <!-- end hours --> */}
                            {/* <!-- days --> */}
                            <div className="dash days_dash entrance animated">
                                <div className="content">
                                    <div className="digit">0</div><div className="digit">0</div><div className="digit">0</div>
                                    <span className="dash_title">days</span>
                                </div>
                            </div>
                            {/* <!-- end days --> */}
                            {/* <!-- minutes --> */}
                            <div className="dash minutes_dash entrance animated">
                                <div className="content">
                                    <div className="digit">0</div><div className="digit">0</div>
                                    {/* <span className="dash_title">mins</span> */}
                                </div>
                            </div>
                            {/* <!-- end minutes --> */}
                            {/* <!-- seconds --> */}
                            <div className="dash seconds_dash entrance animated">
                                <div className="content">
                                    <div className="digit">0</div><div className="digit">0</div>
                                    <span className="dash_title">secs</span>
                                </div>
                            </div>
                            {/* <!-- end seconds --> */}
                        </div>
                    </div>
                    {/* <!-- end countdown --> */}

                    {/* <!-- 10.0 about container --> */}
                    <div className="about-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                        <h2 className="animated entrance">about us</h2>
                        <p className="about-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-xs-12 animated entrance">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim veniam.
                                </p>

                        {/* <!-- 10.1 service --> */}
                        <div className="service-container col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 animated entrance">
                            {/* <!-- next service --> */}
                            <a className="next-service" href="#">&gt;</a>
                            {/* <!-- end next service --> */}

                            {/* <!-- prev service --> */}
                            <a className="prev-service" href="#">&lt;</a>
                            {/* <!-- end prev service --> */}

                            <div className="owl-carousel">
                                {/* <!-- branding --> */}
                                <div className="service">
                                    <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <span aria-hidden="true" className="icon icon-present"></span>
                                        <span className="text">
                                            branding
                                                </span>
                                    </div>
                                    <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                        <p>Lorem ipsum dolor sit semper amet dolor sit semper amet dolor sit semper amet</p>
                                    </div>
                                </div>
                                {/* <!-- end branding --> */}

                                {/* <!-- marketing --> */}
                                <div className="service">
                                    <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <span aria-hidden="true" className="icon icon-anchor"></span>
                                        <span className="text">marketing</span>
                                    </div>
                                    <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                        <p>Lorem ipsum dolor sit semper amet dolor sit semper amet dolor sit semper amet</p>
                                    </div>
                                </div>
                                {/* <!-- end marketing --> */}

                                {/* <!-- design --> */}
                                <div className="service">
                                    <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <span aria-hidden="true" className="icon icon-pencil"></span>
                                        <span className="text">design</span>
                                    </div>
                                    <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                        <p>Lorem ipsum dolor sit semper amet dolor sit semper amet dolor sit semper amet</p>
                                    </div>
                                </div>
                                {/* <!-- end design --> */}
                            </div>
                        </div>
                        {/* <!-- end service --> */}
                    </div>
                    {/* <!-- end about container --> */}

                    {/* <!-- 11.0 subscribe container --> */}
                    <div className="subscribe-container col-lg-6 col-md-6 col-sm-12 centering-y">
                        <h2 className="animated entrance">subscribe</h2>
                        <p className="subscribe-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 animated entrance">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                                </p>

                        {/* <!-- subscribe form --> */}
                        <div className="subscribe-form-container col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 animated entrance">
                            <form className="subscribe-form" action="http://facebook.us3.list-manage.com/subscribe/post-json?u=3dbee991d579ab45fd913a688&amp;id=6b6542f366&amp;c=?" method="get" encType="multipart/form-data">

                                <input id="email" type="text" name="EMAIL" className="subscribe-email" placeholder="your email address" />
                                <span className="email-icon"></span>

                                <button type="submit" className="button-regular">submit</button>
                            </form>

                            {/* <!-- notif container --> */}
                            <div className="subscribe-notif">

                            </div>
                            {/* <!-- end notif container --> */}
                        </div>
                        {/* <!-- end subscribe form --> */}
                    </div>
                    {/* <!-- end subscribe container --> */}

                    {/* <!-- 12.0 works container --> */}
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
                    {/* <!-- end works container --> */}

                    {/* <!-- 13.0 contact container --> */}
                    <div className="contact-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                        <h2 className="animated entrance">contact</h2>
                        <p className="contact-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                            If you have any question or have a project to discuss with us, drop us a line below. We'd love to talk.
                                </p>

                        {/* <!-- contact details --> */}
                        <div className="contact-details col-lg-10 col-lg-offset-2 col-md-11 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                            {/* <!-- phone --> */}
                            <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <span aria-hidden="true" className="icon icon-call-in"></span>
                                <span className="desc">
                                    +62 356 3343
                                        </span>
                            </div>
                            {/* <!-- end phone --> */}

                            {/* <!-- email --> */}
                            <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <span aria-hidden="true" className="icon icon-envelope-open"></span>
                                <span className="desc">
                                    youremail@email.com
                                        </span>
                            </div>
                            {/* <!-- end email --> */}

                            {/* <!-- address --> */}
                            <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <span aria-hidden="true" className="icon icon-pointer"></span>
                                <span className="desc">
                                    245 Quigley Blvd, Ste K
                                        </span>
                            </div>
                            {/* <!-- end address --> */}
                        </div>
                        {/* <!-- end contact details --> */}
                    </div>
                    {/* <!-- end contact container --> */}

                    {/* <!-- 14.0 main content controls --> */}
                    <nav className="main-content-controls col-lg-6 col-md-6 animated entrance">
                        <a href="#" className="next-content button-square">&rarr;</a>
                        <a href="#" className="prev-content button-square">&larr;</a>
                    </nav>
                    {/* <!-- end main content controls --> */}
            </div>
        )
    }
}