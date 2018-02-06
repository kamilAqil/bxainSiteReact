import React from 'react';
import WhiteSvgComponent from './WhiteSvgComponent';
import WorksComponent from './mainContentComponents/worksComponent';
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
                    
                    {/* <!-- end countdown --> */}

                    {/* <!-- 10.0 about container --> */}
                    <div className="about-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                        <h2 className="animated entrance">about us</h2>
                        <p className="about-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-xs-12 animated entrance">
                            When we use social media, email, and when we shop online or at the store, we leave
                            behind a trail of data. This is where BXAIN comes in. At BXAIN we access and harvest this
                            data in conjunction with our self-generated leads to market to a potential customer in a
                            hyper targeted manner. The team at BXAIN skillfully compiles consumer behavior data with
                            social media accounts and contact information of individuals. We the overlay that data with
                            unique device identifiers, cookies, and Geo targeting to create comprehensive profiles of
                            millions of Americans, as well as residents of other countries.
                            It does not stop there our creative department goes to work on producing captivating digital ads and
                            promotional materials which are served to potential customers using our proprietary targeting data.
                        </p>


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
                         <WorksComponent />
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