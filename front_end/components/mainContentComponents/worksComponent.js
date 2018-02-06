import React from 'react';



export default class WorksComponent extends React.Component{
    render(){
        return(

            <div className="works-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                <h2 className="animated entrance">WEB Development</h2>
                <p className="works-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                Modern and creative website design gives you a website tailored to your particular field of business, which helps you interact with your audience more efficiently.
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
                        {/* <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <h1>WebDevelopment</h1>
                                <p>
                                    Far beyond the simple ability to use social media, digital marketing requires an
                                    understanding of consumer habits and motivation, the ability of synthesized
                                    analytics, and communicating effectively with clients. Check out what exactly

                                    digital marketing is, why it is important, a day-in- the life of digital marketer and
                                    how to get into the industry.
                                    The promotion of product or brands via one or more forms of electronic media.
                                </p>

                            </div>

                        </div> */}
                            <div className="service">
                                <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <img src="img/planning.png" data-name="seo" id="seoIcon"/>
                                    <span className="text">
                                        PLANNING
                                    </span>
                                </div>
                                <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y" style={{textAlign:'right'}}>
                                    <ul>
                                    <li><span className="listItemSpan">Spelling what you want</span></li>
                                    <li><span className="listItemSpan">how do you plant to implement</span></li>
                                  
                                    </ul>
                                </div>
                            </div>
                        {/* <!-- end work 1 --> */}

                        {/* <!-- work 2 --> */}
                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <img src="img/layout.png" data-name="seo" id="seoIcon"/>
                                <span className="text">
                                    LAYOUT DESIGN
                                </span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y" style={{textAlign:'right'}}>
                                <ul>
                                <li><span className="listItemSpan">Wireframe Layout</span></li>
                                <li><span className="listItemSpan">Prototype Design</span></li>
                                <li><span className="listItemSpan">Design Signoff</span></li>
                                </ul>

                            </div>

                        </div>
                        {/* <!-- end work 2 --> */}

                        {/* <!-- work 3 --> */}

                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <img src="img/development.png" data-name="seo" id="seoIcon"/>
                                <span className="text">
                                    DEVELOPMENT
                                </span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y" style={{textAlign:'right'}}>
                                <ul>
                                <li><span className="listItemSpan">Content Managment systems</span></li>
                                <li><span className="listItemSpan">Efficient programing</span></li>
                                <li><span className="listItemSpan">Modern and clean code</span></li>
                                </ul>

                            </div>

                        </div>
                        {/* <!-- end work 3 --> */}
                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <img src="img/security_test.png" data-name="seo" id="seoIcon"/>
                                <span className="text">
                                    TESTING
                                </span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y" style={{textAlign:'right'}}>
                                <ul>
                                <li><span className="listItemSpan">Security Testing</span></li>
                                <li><span className="listItemSpan">Functionality Testing</span></li>
                                <li><span className="listItemSpan">Performance Testing</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <img src="img/settings.png" data-name="seo" id="seoIcon"/>
                                <span className="text">
                                    SUPPORT
                                </span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y" style={{textAlign:'right'}}>
                                <ul>
                                <li><span className="listItemSpan">Fix Errors</span></li>
                                <li><span className="listItemSpan">Backups</span></li>
                                <li><span className="listItemSpan">Monitor</span></li>
                                <li><span className="listItemSpan">Update</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- end works gallery --> */}
            </div>
        )
    }
}