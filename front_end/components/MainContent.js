import React from 'react';
import WhiteSvgComponent from './WhiteSvgComponent';
import WorksComponent from './mainContentComponents/worksComponent';
import DigitalMarketingComponent from './mainContentComponents/DigitalMarketingComponent';
import VisualProductionComponent from './mainContentComponents/VisualProductionComponent';
import ContactComponent from './mainContentComponents/ContactComponent';

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
                    {/* <!-- 10.0 about container --> */}
                        <DigitalMarketingComponent />
                    {/* <!-- end about container --> */}

                    {/* <!-- 11.0 subscribe container --> */}
                        <VisualProductionComponent />
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
                        <ContactComponent />
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