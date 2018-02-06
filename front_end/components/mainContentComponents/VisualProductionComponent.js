import React from 'react';

export default class VisualProductionComponent extends React.Component{
    render(){
        return(
            <div className="subscribe-container col-lg-6 col-md-6 col-sm-12 centering-y">
                <h2 className="animated entrance">Video Production</h2>
                <p className="subscribe-desc col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 animated entrance">Visualize the bests part of your business with the artistic video making at its best and movie-grade production and direction. Our goal is to reveal the potential of your product through our professional video production team at Bxain</p>

                {/* <!-- subscribe form --> */}
                <div className="subscribe-form-container col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-2 col-sm-12 col-sm-offset-0 animated entrance">
                    

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