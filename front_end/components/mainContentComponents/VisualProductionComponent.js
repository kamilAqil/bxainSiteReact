import React from 'react';

export default class VisualProductionComponent extends React.Component{
    render(){
        return(
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
        )
    }
}