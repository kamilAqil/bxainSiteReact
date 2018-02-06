import React from 'react';

export default class DigitalMarketingComponent extends React.Component{
    render(){
        return(
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

            
        )
    }
}