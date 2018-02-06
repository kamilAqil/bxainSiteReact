import React from 'react';

const seoStyle = {
    height: '50px',
    width:'50px'
}



export default class DigitalMarketingComponent extends React.Component{
    render(){
        return(
            <div className="about-container col-lg-6 col-md-6 col-sm-12 col-xs-12 centering-y">
                <h2 className="animated entrance">Digital Marketing</h2>
                <p className="about-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-xs-12 animated entrance">Get your name out there by leveraging our experience with SEO, Social Media, Pay Per Click, and E-Mail Marketing</p>

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
                                <img src="img/seo.png" data-name="seo" id="seoIcon" style={seoStyle}/>
                                    <span className="text">
                                        SEO
                                    </span>
                                </div>
                                <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                    <ul>
                                    <li><span className="listItemSpan">Target your audience</span></li>
                                    <li><span className="listItemSpan">Focus your Content</span></li>
                                    <li><span className="listItemSpan">Maximize online exposure</span></li>
                                    </ul>
                                </div>
                            </div>
                        {/* <!-- end branding --> */}

                        {/* <!-- marketing --> */}
                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <span aria-hidden="true" className="icon icon-bubble"></span>
                                <span className="text">Social Media</span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                <ul>
                                    <li><span className="listItemSpan">Track return on ads</span></li>
                                    <li><span className="listItemSpan">Create organic brand identity</span></li>
                                    <li><span className="listItemSpan">Speak to your followers</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- end marketing --> */}

                        {/* <!-- design --> */}
                        <div className="service">
                            <div className="icon-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <span aria-hidden="true" className="icon icon-pencil"></span>
                                <span className="text">E-mail Marketing</span>
                            </div>
                            <div className="desc-container col-lg-8 col-md-8 col-sm-12 col-xs-12 centering-y">
                                <ul>
                                    <li><span className="listItemSpan">Generate More Sales</span></li>
                                    <li><span className="listItemSpan">Reduce Marketing Cost</span></li>
                                    <li><span className="listItemSpan">Improved Conversion Rates</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- end design --> */}
                    </div>
                </div>
                {/* <!-- end service --> */}
            </div>

            
        )
    }
}