import React from 'react';

export default class ComingSoon extends React.Component{
    render(){
        return (
            <div className="container">
                {/* <!-- container --> */}
                <div className="coming-soon-container col-lg-12 col-md-12 col-sm-12 col-xs-12 centering-y">
                    {/* <!-- left side --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-side animated entrance">
                        <h1>We Are</h1>
                    </div>
                    {/* <!-- end left side --> */}

                    {/* <!-- right side --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-side animated entrance">
                        <h1 id="word-rotator">BXAIN</h1>
                    </div>
                    {/* <!-- end right side --> */}

                    <div className="separator animated entrance"></div>
                </div>
                {/* <!-- container --> */}
            </div>
        )
    }
}