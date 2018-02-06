import React from 'react';

export default class WorksComponent extends React.Component{
    render(){
        return(
            <div className="works-container col-lg-10 col-md-10 col-sm-12 col-xs-12 centering-y">
                <h2 className="animated entrance">our works</h2>


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

                        </div>
                        {/* <!-- end work 1 --> */}

                        {/* <!-- work 2 --> */}
                        <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <h1>VideoProduction</h1>
                                <p>
                                    Far beyond the simple ability to use social media, digital marketing requires an
                                    understanding of consumer habits and motivation, the ability of synthesized
                                    analytics, and communicating effectively with clients. Check out what exactly

                                    digital marketing is, why it is important, a day-in- the life of digital marketer and
                                    how to get into the industry.
                                    The promotion of product or brands via one or more forms of electronic media.
                                </p>

                            </div>

                        </div>
                        {/* <!-- end work 2 --> */}

                        {/* <!-- work 3 --> */}
                        <div className="work">
                            <div className="text-container col-lg-5 col-md-5 col-sm-5 col-xs-6">
                                <h1>DigitalMarketing</h1>
                                <p>
                                    Far beyond the simple ability to use social media, digital marketing requires an
                                    understanding of consumer habits and motivation, the ability of synthesized
                                    analytics, and communicating effectively with clients. Check out what exactly

                                    digital marketing is, why it is important, a day-in- the life of digital marketer and
                                    how to get into the industry.
                                    The promotion of product or brands via one or more forms of electronic media.
                                </p>

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